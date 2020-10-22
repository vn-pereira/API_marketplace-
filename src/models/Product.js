const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  providerID: String,
  name: String,
  description: String,
  rating: String,
  price: String,
  stock: Number,
  active: Boolean,
  deletedOn: Date,
});

module.exports = productSchema;
