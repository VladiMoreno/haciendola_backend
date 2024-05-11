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
);

router.post(
  "/add",
  validator(schemas.create),
  authMiddleWare,
  productController.addProduct
);

router.put(
  "/update",
  validator(schemas.edit),
  authMiddleWare,
  productController.updateProduct
);

router.delete("/:id", authMiddleWare, productController.removeProduct);

module.exports = router;
