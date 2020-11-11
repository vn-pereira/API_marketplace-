const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  providerID: String,
  name: String,
  description: String,
  category: String,
  rating: String,
  price: String,
  stock: Number,
  active: Boolean,
  deletedOn: Date,
  images: Array,
});

module.exports = productSchema;
