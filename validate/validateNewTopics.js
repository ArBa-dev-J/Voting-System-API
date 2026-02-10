import { body } from "express-validator";

const validateTopicsTitle = [
  body().notEmpty().withMessage("Must contain data"),

  // validate title

  body("title")
    .isString()
    .withMessage("Name must be a string")
    .isLength({ min: 3 })
    .withMessage("Title must be atleast 3 characters longs"),

  body("description")
    .isLength({ max: 500 })
    .withMessage("Description cannot be longer than 500 chars"),
];

export default validateTopicsTitle