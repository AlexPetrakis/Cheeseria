import { v4 as uuidv4 } from "uuid";

import logger from "../logger";
import { cheeses } from "../models";
import { BaseCheeseItem, Cheese } from "../types";

export const getAll = (): Cheese[] => {
  try {
    return cheeses;
  } catch (error) {
    const message = "Failed to retrieve data from model";
    logger.error(error, { message });
    throw new Error(message);
  }
};

export const get = (id: string): Cheese => {
  try {
    const cheese = cheeses.find((cheese) => cheese.id === id);
    if (!cheese) {
      return null;
    }
    return cheese;
  } catch (error) {
    const message = "Failed to retrieve data from model";
    logger.error(error, { message });
    throw new Error(message);
  }
};

export const create = (item: BaseCheeseItem): Cheese => {
  try {
    const id = uuidv4();
    const cheese = { ...item, id };
    cheeses.push(cheese);
    return cheese;
  } catch (error) {
    const message = "Failed to create cheese in db";
    logger.error(error, { message });
    throw new Error(message);
  }
};

export const update = (id: string, item: Cheese): Cheese => {
  try {
    let cheese = cheeses.find((cheese) => cheese.id === id);
    if (!cheese) {
      return null;
    }
    // Don't allow ID to be updated
    delete item.id;
    cheese = { ...cheese, ...item };

    cheeses.forEach((c, index) => {
      if (c.id === id) {
        cheeses[index] = cheese;
      }
    });
    return cheese;
  } catch (error) {
    const message = "Failed to update cheese in db";
    logger.error(error, { message });
    throw new Error(message);
  }
};

export const remove = (id: string) => {
  try {
    const cheese = cheeses.find((cheese) => cheese.id === id);
    if (!cheese) {
      return null;
    }

    cheeses.forEach((c, index) => {
      if (c.id === id) {
        cheeses.splice(index, 1);
      }
    });
    return cheese;
  } catch (error) {
    const message = "Failed to delete cheese in db";
    logger.error(error, { message });
    throw new Error(message);
  }
};
