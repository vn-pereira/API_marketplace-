const mongoose = require("../config/database");

const providerSchema = require("../models/Provider");
const Provider = new mongoose.model("Provider", providerSchema);

class ProviderController {
  static allProviders() {
    return (req, resp) => {
      Provider.find({ active: true }, (err, providers) => {
        if (err) return err;
        resp.send(providers);
      });
    };
  }

  static byProviderId() {
    return (req, resp) => {
      Provider.findOne({ _id: req.params.id }, (err, provider) => {
        if (err) resp.send(err);
        resp.send(provider);
      });
    };
  }

  static createProvider() {
    return async (req, resp) => {
      const {
        companyName,
        legalName,
        contact,
        providerName,
        CNPJ,
        providerAdress,
      } = req.body;

      const provider = new Provider({
        companyName,
        legalName,
        contact,
        providerName,
        CNPJ,
        providerAdress,
        active: true,
      });

      await provider.save((err) => {
        if (err) return err;
      });

      resp.send("Welcome to our Marketplace!");
    };
  }

  static updateProvider() {
    return (req, resp) => {
      const query = { _id: req.params.id };
      Provider.updateOne(
        query,
        {
          $set: {
            companyName: req.body.name,
            contact: req.body.contact,
            providerAdress: req.body.providerAdress,
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

  static deleteProvider() {
    return async (req, resp) => {
      const query = { _id: req.params.id };
      await Provider.updateOne(
        query,
        {
          $set: {
            active: false,
            deletedOn: new Date(),
          },
        },
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
      resp.send("Provider Deleted");
    };
  }
}

module.exports = ProviderController;
