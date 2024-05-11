const Joi = require("joi");

const schemas = {
  create: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    pin: Joi.string().min(4).max(4).required(),
  }),
};

module.exports = schemas;
