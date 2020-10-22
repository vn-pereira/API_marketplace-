const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema({
  companyName: String,
  legalName: String,
  contact: String,
  providerName: String,
  CNPJ: String,
  providerAdress: String,
  active: Boolean,
  deletedOn: Date,
});

module.exports = providerSchema;
