const mongoose = require("mongoose");

const userSchema = new mongoose.Schema ({
    idUser: String,
    nomeUser: String,
    emailUser: String,
    senhaUser: String,
    cpfUser: Number,
    telefoneUser: Number,
    enderecoUser: String,
}); 

module.exports = userSchema;