require("dotenv/config");

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
