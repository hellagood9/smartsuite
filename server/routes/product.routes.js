const express = require("express");
const router = express.Router();

const data = require("../data");

router.get("/", (req, res) => {
  res.json(data.products);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const product = data.products.find((prod) => prod._id === +id);

  if (product) res.json(product);
  else res.status(404).json({ message: "Product not found" });
});

module.exports = router;
