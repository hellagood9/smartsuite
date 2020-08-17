const express = require("express");
const router = express.Router();

// Routes
const userRouter = require("./user.routes");
const productRouter = require("./product.routes");

router.use("/users", userRouter);
router.use("/products", productRouter);

module.exports = router;
