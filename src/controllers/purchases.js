const mongoose = require("../config/database");

const purchaseSchema = require("../models/Purchase");
const Purchase = new mongoose.model("Purchase", purchaseSchema);
module.exports = class PurchaseController {
  static getAll() {
    return (req, resp) => {
      Purchase.find({}, (err, purchases) => {
        if (err) return err;
        resp.send(purchases);
      });
    };
  }
  static getByProductId() {
    return (req, res) => {
      const id = req.params.id;
      Purchase.find({ idProduct: id }, (err, purchase) => {
        if (err) res.send(err);
        res.send(purchase);
      });
    };
  }
  static getByUserId() {
    return (req, res) => {
      const { id } = req.params;
      Purchase.find({ idClient: id }, (err, purchase) => {
        if (err) res.send(err);
        res.send(purchase);
      });
    };
  }
  static createPurchase() {
    return async (req, res) => {
      const { idProduct, idClient, idProvider, purchaseValue } = req.body;
      const purchase = new Purchase({
        idClient,
        idProduct,
        idProvider,
        purchaseValue,
        purchaseDate: new Date(),
      });
      await purchase.save((err) => {
        if (err) res.send(err);
      });
      res.send("Purchase successful!");
    };
  }

  static deletePurchase() {
    return async (req, res) => {
      const id = req.params.id;
      await Purchase.update(
        { _id: id },
        { $set: { deletedPurchaseOn: new Date() } }
      );
      res.send("Purchase deleted.");
    };
  }
};
