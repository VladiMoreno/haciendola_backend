const Joi = require("joi");

const schemas = {
  create: Joi.object({
    handle: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    sku: Joi.number().required(),
    grams: Joi.number().required(),
    price: Joi.number().required(),
    compare_price: Joi.number().required(),
    bar_code: Joi.string().max(13).min(13).required(),
  }),
  edit: Joi.object({
    id: Joi.number().required(),
    handle: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    sku: Joi.number().required(),
    grams: Joi.number().required(),
    price: Joi.number().required(),
    compare_price: Joi.number().required(),
    bar_code: Joi.string().max(13).min(13).required(),
  }),
};

module.exports = schemas;
