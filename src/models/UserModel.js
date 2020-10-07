const mongoose = require("mongoose");

const userSchema = new mongoose.Schema ({
    idCustomer: String,
    nomeCustomer: String,
    emailCustomer: String,
    senhaCustomer: String,
    cpfCustomer: Number,
    telefoneCustomer: Number,
    endereçoCustomer: String,
}); 

module.exports = userSchema;