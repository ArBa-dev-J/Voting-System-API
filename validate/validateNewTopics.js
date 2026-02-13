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

  body("options")
    .isArray()
    .withMessage("Must be an array")
    .isArray({min: 2, max: 5})
    .withMessage("Options have to be from 2 to 5")
    .notEmpty()
    .withMessage("Must not be empty")
    //Checks for non unique options
    .custom((tags) => {
      const unique = new Set(tags);
      if (unique.size !== tags.length) {
        throw new Error("Options must be unique");
      }
      return true;
    })
];

export default validateTopicsTitle;
