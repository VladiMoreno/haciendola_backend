const express = require("express");
const productController = require("#controllers/product.controller.js");
const authMiddleWare = require("#middlewares/auth.middleware.js");
const validator = require("#middlewares/validator.middleware.js");
const schemas = require("#validators/product.validator.js");
const router = express.Router();

router.get(
  "/get-products-by-user",
  authMiddleWare,
  productController.getProductsByUser
  /*
    #swagger.tags = ['Products']
    #swagger.security = [{
      "bearerAuth": []
    }]
  */
);

router.post(
  "/add",
  validator(schemas.create),
  authMiddleWare,
  productController.addProduct
  /*
    #swagger.tags = ['Products']
    #swagger.security = [{
      "bearerAuth": []
    }]
    #swagger.requestBody =  {
        "required": true,
        "content": {
            "application/json": {
                "schema": {
                    "required": [
                        "product_handle",
                        "product_title",
                        "product_description",
                        "product_sku",
                        "product_grams",
                        "product_stock",
                        "product_price",
                        "product_compare_price",
                        "product_bar_code",
                    ],
                    "properties": {
                        "product_handle": {
                            "description": "handle del producto",
                            "type": "string"
                        },
                        "product_title": {
                            "description": "title del producto",
                            "type": "string"
                        },
                        "product_description": {
                            "description": "description del producto",
                            "type": "string"
                        },
                        "product_sku": {
                            "description": "sku del producto",
                            "type": "number"
                        },
                        "product_grams": {
                            "description": "grams del producto",
                            "type": "number"
                        },
                        "product_stock": {
                            "description": "stock del producto",
                            "type": "number"
                        },
                        "product_price": {
                            "description": "price del producto",
                            "type": "number"
                        },
                        "product_compare_price": {
                            "description": "compare_price del producto",
                            "type": "number"
                        },
                        "product_bar_code": {
                            "description": "bar_code del producto",
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

router.put(
  "/update",
  validator(schemas.edit),
  authMiddleWare,
  productController.updateProduct
  /*
    #swagger.tags = ['Products']
    #swagger.security = [{
      "bearerAuth": []
    }]
    #swagger.requestBody =  {
        "required": true,
        "content": {
            "application/json": {
                "schema": {
                    "required": [
                        "pk_product_id",
                        "product_handle",
                        "product_title",
                        "product_description",
                        "product_sku",
                        "product_grams",
                        "product_stock",
                        "product_price",
                        "product_compare_price",
                        "product_bar_code",
                    ],
                    "properties": {
                        "pk_product_id": {
                            "description": "id del producto",
                            "type": "number"
                        },
                        "product_handle": {
                            "description": "handle del producto",
                            "type": "string"
                        },
                        "product_title": {
                            "description": "title del producto",
                            "type": "string"
                        },
                        "product_description": {
                            "description": "description del producto",
                            "type": "string"
                        },
                        "product_sku": {
                            "description": "sku del producto",
                            "type": "number"
                        },
                        "product_grams": {
                            "description": "grams del producto",
                            "type": "number"
                        },
                        "product_stock": {
                            "description": "stock del producto",
                            "type": "number"
                        },
                        "product_price": {
                            "description": "price del producto",
                            "type": "number"
                        },
                        "product_compare_price": {
                            "description": "compare_price del producto",
                            "type": "number"
                        },
                        "product_bar_code": {
                            "description": "bar_code del producto",
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

router.delete(
  "/:id",
  authMiddleWare,
  productController.removeProduct
  /*
    #swagger.tags = ['Products']
    #swagger.security = [{
      "bearerAuth": []
    }]
    
  */
);

module.exports = router;
