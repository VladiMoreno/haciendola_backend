const express = require("express");
const userController = require("#controllers/user.controller.js");
const validator = require("#middlewares/validator.middleware.js");
const schemas = require("#validators/user.validator.js");
const router = express.Router();

router.post(
  "/",
  validator(schemas.create),
  userController.createUser
  /* #swagger.ignore = true */
);

module.exports = router;
