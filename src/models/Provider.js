const mongoose = require('mongoose')

const providerSchema = new mongoose.Schema({
    idProvider : String,
    name : String,
    contact : String,
    providerName: String,
    CNPJ: String,
    providerAdress : String

});

module.exports = providerSchema