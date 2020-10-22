const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  idClient: String,
  idProduct: String,
  idProvider: String,
  purchaseValue: Number,
  purchaseDate: Date,
  active: Boolean,
  cancelledPurchaseOn: Date,
});

module.exports = purchaseSchema;
