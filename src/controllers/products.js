const mongoose = require("../config/database");

const productSchema = require("../models/Product");
const Product = new mongoose.model("Product", productSchema);

module.exports = class ProductController {
  static getAllProducts() {
    return (req, resp) => {
      Product.find({}, (err, products) => {
        if (err) return err;
        resp.send(products);
      });
    };
  }

  static getAllByProvider() {
    return (req, resp) => {
      Product.find({ CNPJ: req.params.CNPJ }, (err, products) => {
        if (err) return err;
        resp.send(products);
      });
    };
  }

  static getByProductId() {
    return (req, resp) => {
      const id = req.params.id;
      Product.find({ idProduct: id, idProvider }, (err, products) => {
        if (err) resp.send(err);
        resp.send(product);
      });
    };
  }

  static getByProductName() {
    return (req, resp) => {
      const name = req.params.name;
      Product.find({ name }, (err, products) => {
        if (err) resp.send(err);
        resp.send(products);
      });
    };
  }

  static createProduct() {
    return async (req, resp) => {
      const {
        providerCNPJ,
        name,
        description,
        rating,
        price,
        stock,
      } = req.body;
      const product = new Product({
        providerCNPJ,
        name,
        description,
        rating,
        price,
        stock,
      });
      await product.save((err) => {
        if (err) resp.send(err);
      });
      resp.send("Your product was added");
    };
  }

  static deleteProduct() {
    return async (req, resp) => {
      const id = req.params.id;
      await Product.update({ _id: id });
      resp.send("Product deleted");
    };
  }

  static updateProduct() {
    return async (req, resp) => {
      const query = { _id: req.params.id };
      Product.updateOne(
        query,
        {
          $set: {
            providerCNPJ: req.body.providerCNPJ,
            name: req.body.name,
            description: req.body.description,
            rating: req.body.rating,
            price: req.body.price,
            stock: req.body.stock,
          },
        },
        (err, doc) => {
          if (err) {
            resp.send(err);
          }
          console.log(doc);

          resp.send("Data changed successfully!");
        }
      );
    };
  }
};
