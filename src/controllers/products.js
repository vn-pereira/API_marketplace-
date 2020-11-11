const mongoose = require("../config/database");
const productSchema = require("../models/Product");

const Product = new mongoose.model("Product", productSchema);

module.exports = class ProductController {
  static getAllProducts() {
    return (req, resp) => {
      Product.find({ active: true }, (err, products) => {
        if (err) return err;
        resp.send(products);
      });
    };
  }

  static getAllByProvider() {
    return async (req, resp) => {
      await Product.find(
        { providerID: req.params.providerID },
        (err, products) => {
          if (err) resp.send(err);
          resp.send(products);
        }
      );
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

  static getProductByCategory() {
    return async (req, resp) => {
      const productID = req.params.productID;
      const category = req.params.category;
      await Product.find(
        {id: productID, category}, (err, products) => {
          if (err) resp.send(err);
          resp.send(products)
        }
      );
    };
  }

  static getProductByProviderId() {
    return async (req, resp) => {
      const providerID = req.params.providerID;
      const productID = req.params.productID;
      await Product.find(
        { _id: productID, providerID: providerID },
        (err, products) => {
          if (err) resp.send(err);
          resp.send(products);
        }
      );
    };
  }

  static createProduct() {
    return async (req, resp) => {
      const { providerID, name, description, rating, price, stock } = req.body;
      const product = new Product({
        providerID,
        name,
        description,
        category,
        rating,
        price,
        stock,
        images,
        active: true,
      });
      await product.save((err) => {
        if (err) resp.send(err);
        resp.send("Your product was added");
      });
    };
  }

  static deleteProduct() {
    return async (req, resp) => {
      const query = { _id: req.params.id };
      await Product.updateOne(
        query,
        {
          $set: {
            active: false,
            deleteOn: new Date(),
          },
        },
        (err) => {
          if (err) resp.send(err);
          resp.send("Product deleted");
        }
      );
    };
  }

  static updateProduct() {
    return async (req, resp) => {
      const query = { _id: req.params.id };
      Product.updateOne(
        query,
        {
          $set: {
            name: req.body.name,
            description: req.body.description,
            category:req.body.category,
            rating: req.body.rating,
            price: req.body.price,
            stock: req.body.stock,
            images: req.body.images,
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

  static updateAllProducts() {
    return async (req, resp) => {
      await Product.updateMany(
        {
          $set: {
            ...req.body,
          },
        },
        (err) => {
          if (err) {
            resp.send(err);
          }
          resp.send("Data changed successfully!");
        }
      );
    };
  }
};
