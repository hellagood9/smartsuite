const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  priceDiscount: {
    type: Number,
    default: 0,
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
  rating: {
    type: Number,
    required: true,
    default: 1,
  },
  liked: {
    type: Boolean,
    required: true,
    default: false,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
