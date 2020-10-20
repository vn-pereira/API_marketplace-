const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  providerCNPJ: String,
  name: String,
  description: String,
  rating: String,
  price: String,
  stock: Number,
});

module.exports = productSchema;
