const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    idProduct: String,
    name: String,
    description: String,
    rating: String,
    price: String,
    stock: Number,
    idProvider: String

});

module.exports = productSchema;