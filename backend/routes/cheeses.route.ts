import express from "express";
import { body } from "express-validator";

import { CheeseController } from "../controllers";

const router = express.Router();

router.get("/cheeses", CheeseController.getAll);

router.get("/cheeses/:id", CheeseController.get);

router.post(
  "/cheeses",
  body("name")
    .isLength({ min: 2, max: 25 })
    .withMessage(
      "name must have a minimum length of 2 and a maximum length of 25"
    )
    .trim(),
  body("colour")
    .isLength({ min: 2, max: 25 })
    .withMessage(
      "colour must have a minimum length of 2 and a maximum length of 25"
    )
    .trim(),
  body("image")
    .isLength({ min: 4, max: 500 })
    .withMessage(
      "image must have a minimum length of 4 and a maximum length of 500"
    )
    .trim(),
  body("price")
    .isFloat({ min: 0, max: 9999999 })
    .withMessage("Price must be a valid number, starting at 0")
    .trim(),
  CheeseController.create
);

router.patch("/cheeses/:id", CheeseController.update);

router.delete("/cheeses/:id", CheeseController.remove);

export default router;
