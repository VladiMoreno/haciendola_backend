const Joi = require("joi");

const schemas = {
  login: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    recuerdame: Joi.bool(),
  }),
  validarPIN: Joi.object({
    username: Joi.string().required(),
    pin: Joi.string().min(4).max(4).required(),
  }),
  changePassword: Joi.object({
    username: Joi.string().required(),
    newPassword: Joi.string().required(),
    repeatNewPassword: Joi.string().required(),
    pin: Joi.string().min(4).max(4).required(),
  }),
};

module.exports = schemas;
