const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema({
  name: String,
  contact: String,
  providerName: String,
  CNPJ: String,
  providerAdress: String,
});

module.exports = providerSchema;
