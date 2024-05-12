const express = require("express");
const authController = require("#controllers/auth.controller.js");
const validator = require("#middlewares/validator.middleware.js");
const schemas = require("#validators/auth.validator.js");
const router = express.Router();

router.post(
  "/login",
  validator(schemas.login),
  authController.login
  /*
    #swagger.tags = ['Auth']
    #swagger.requestBody =  {
        "required": true,
        "content": {
            "application/json": {
                "schema": {
                    "required": [
                        "username",
                        "password"
                    ],
                    "properties": {
                        "username": {
                            "description": "username del usuario",
                            "type": "string"
                        },
                        "password": {
                            "description": "Contraseña del usuario",
                            "type": "string"
                        }
                    },
                    "type": "object"
                }
            }
        }
    },
  */
);
router.post(
  "/validar-pin",
  validator(schemas.validarPIN),
  authController.validarPIN
  /*
    #swagger.tags = ['Auth']
    #swagger.requestBody =  {
        "required": true,
        "content": {
            "application/json": {
                "schema": {
                    "required": [
                        "username",
                        "pin"
                    ],
                    "properties": {
                        "username": {
                            "description": "username del usuario",
                            "type": "string"
                        },
                        "pin": {
                            "description": "PIN del usuario",
                            "type": "string"
                        }
                    },
                    "type": "object"
                }
            }
        }
    },
  */
);
router.post(
  "/change-password",
  validator(schemas.changePassword),
  authController.changePassword
  /*
    #swagger.tags = ['Auth']
    #swagger.requestBody =  {
        "required": true,
        "content": {
            "application/json": {
                "schema": {
                    "required": [
                        "username",
                        "pin",
                        "newPassword",
                        "repeatNewPassword"
                    ],
                    "properties": {
                        "username": {
                            "description": "username del usuario",
                            "type": "string"
                        },
                        "pin": {
                            "description": "pin del usuario",
                            "type": "string"
                        },
                        "newPassword": {
                            "description": "nueva contraseña del usuario",
                            "type": "string"
                        },
                        "repeatNewPassword": {
                            "description": "repite la nueva contraseña del usuario",
                            "type": "string"
                        }
                    },
                    "type": "object"
                }
            }
        }
    },
  */
);

module.exports = router;
