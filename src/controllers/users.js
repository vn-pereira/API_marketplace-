const mongoose = require("mongoose");

const customer = new mongoose.Schema ({
    idCustomer: String,
    nomeCustomer: String,
    emailCustomer: String,
    senhaCustomer: String,
    cpfCustomer: Number,
    telefoneCustomer: Number,
    endereçoCustomer: String,
});
    module.exports = customer;