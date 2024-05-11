const express = require("express");
const productController = require("#controllers/product.controller.js");
const authMiddleWare = require("#middlewares/auth.middleware.js");
const router = express.Router();

router.get(
  "/get-products-by-user",
  authMiddleWare,
  productController.getProductsByUser
);

module.exports = router;
