const express = require("express");
const authController = require("#controllers/auth.controller.js");
const validator = require("#middlewares/validator.middleware.js");
const schemas = require("#validators/auth.validator.js");
const router = express.Router();

router.post("/login", validator(schemas.login), authController.login);

router.post(
  "/change-password",
  validator(schemas.changePassword),
  authController.changePassword
);

module.exports = router;
