const express = require("express");
const router = express.Router();

router.use("/api/users", require("./user.routes"));

router.use("/api/auth", require("./auth.routes"));

router.use("/api/products", require("./product.routes"));

module.exports = router;
