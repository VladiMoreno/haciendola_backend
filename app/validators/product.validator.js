const Joi = require("joi");

const schemas = {
  create: Joi.object({
    product_handle: Joi.string().required(),
    product_title: Joi.string().required(),
    product_description: Joi.string().required(),
    product_sku: Joi.number().required(),
    product_grams: Joi.number().required(),
    product_stock: Joi.number().required(),
    product_price: Joi.number().required(),
    product_compare_price: Joi.number().required(),
    product_bar_code: Joi.string().max(13).min(13).required(),
  }),
  edit: Joi.object({
    pk_product_id: Joi.number().required(),
    product_handle: Joi.string().required(),
    product_title: Joi.string().required(),
    product_description: Joi.string().required(),
    product_sku: Joi.number().required(),
    product_grams: Joi.number().required(),
    product_stock: Joi.number().required(),
    product_price: Joi.number().required(),
    product_compare_price: Joi.number().required(),
    product_bar_code: Joi.string().max(13).min(13).required(),
  }),
};

module.exports = schemas;
