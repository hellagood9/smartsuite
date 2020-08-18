const express = require("express");
const router = express.Router();

const data = require("../data");
const Product = require("../models/Product");

router.get("/", async (req, res) => {
  try {
    const data = await Product.find({});

    if (data.length === 0) return res.status(200).json([]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Product.findById(id);

    if (data.length === 0) return res.status(200).json([]);
    if (!data) return res.status(404).json({ message: "Product not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
