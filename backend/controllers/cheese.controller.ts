import { Request, Response } from "express";

import logger from "../logger";
import { CheeseService } from "../services";
import { ItemNotFoundError, ValidationError } from "../utils/Errors";
const { validationResult } = require("express-validator");

export const getAll = (req: Request, res: Response) => {
  try {
    const data = CheeseService.getAll();
    res.status(200).send(data);
  } catch (error) {
    logger.error(error);
    res.status(500).send(error.message);
  }
};

export const get = (req: Request, res: Response) => {
  try {
    const data = CheeseService.get(req.params.id);
    if (!data) {
      throw new ItemNotFoundError();
    }
    res.status(200).send(data);
  } catch (error) {
    logger.error(error);
    if (error instanceof ItemNotFoundError) {
      res.status(error.status).send(error.response);
    }
    res.status(500).send(error.message);
  }
};

export const create = (req: Request, res: Response) => {
  try {
    const { errors } = validationResult(req);
    if (errors.length) {
      //TODO: type this correctly
      throw new ValidationError(errors.map((e: any) => e.msg));
    }
    req.body.price = parseFloat(req.body.price);
    const data = CheeseService.create(req.body);
    return res.status(200).send(data);
  } catch (error) {
    logger.error(error);
    if (error instanceof ValidationError) {
      res.status(error.status).send(error.response);
    }
    res.status(500).send(error.message);
  }
};

//TODO: Add validation for update properties
export const update = (req: Request, res: Response) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send("Body must not be empty");
    }
    const data = CheeseService.update(req.params.id, req.body);
    if (!data) {
      throw new ItemNotFoundError();
    }
    return res.status(200).send(data);
  } catch (error) {
    if (error instanceof ItemNotFoundError) {
      res.status(error.status).send(error.response);
    }
    logger.error(error);
    res.status(500).send(error.message);
  }
};

export const remove = (req: Request, res: Response) => {
  try {
    const data = CheeseService.remove(req.params.id);
    if (!data) {
      throw new ItemNotFoundError();
    }
    return res.status(204).send();
  } catch (error) {
    logger.error(error);
    if (error instanceof ItemNotFoundError) {
      res.status(error.status).send(error.response);
    }
    res.status(500).send(error.message);
  }
};
