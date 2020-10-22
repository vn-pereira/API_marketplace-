const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  fullName: String,
  email: String,
  password: String,
  CPF: String,
  contact: String,
  userAddress: String,
  active: Boolean,
  deleteUserOn: Date,
});

module.exports = userSchema;
