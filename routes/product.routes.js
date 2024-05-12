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
                        "handle",
                        "title",
                        "description",
                        "sku",
                        "grams",
                        "price",
                        "compare_price",
                        "bar_code",
                    ],
                    "properties": {
                        "handle": {
                            "description": "handle del producto",
                            "type": "string"
                        },
                        "title": {
                            "description": "title del producto",
                            "type": "string"
                        },
                        "description": {
                            "description": "description del producto",
                            "type": "string"
                        },
                        "sku": {
                            "description": "sku del producto",
                            "type": "number"
                        },
                        "grams": {
                            "description": "grams del producto",
                            "type": "number"
                        },
                        "price": {
                            "description": "price del producto",
                            "type": "number"
                        },
                        "compare_price": {
                            "description": "compare_price del producto",
                            "type": "number"
                        },
                        "bar_code": {
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
                        "id",
                        "handle",
                        "title",
                        "description",
                        "sku",
                        "grams",
                        "price",
                        "compare_price",
                        "bar_code",
                    ],
                    "properties": {
                        "id": {
                            "description": "id del producto",
                            "type": "number"
                        },
                        "handle": {
                            "description": "handle del producto",
                            "type": "string"
                        },
                        "title": {
                            "description": "title del producto",
                            "type": "string"
                        },
                        "description": {
                            "description": "description del producto",
                            "type": "string"
                        },
                        "sku": {
                            "description": "sku del producto",
                            "type": "number"
                        },
                        "grams": {
                            "description": "grams del producto",
                            "type": "number"
                        },
                        "price": {
                            "description": "price del producto",
                            "type": "number"
                        },
                        "compare_price": {
                            "description": "compare_price del producto",
                            "type": "number"
                        },
                        "bar_code": {
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
