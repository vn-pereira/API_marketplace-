const mongoose = require("../config/database");

const providerSchema = require("../models/Provider");
const Provider = new mongoose.model("Provider", providerSchema);

class ProviderController {
  static allProviders() {
    return (req, resp) => {
      Provider.find({}, (err, providers) => {
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
      // Provider.findOne({ CNPJ: req.params.CNPJ }, (err, provider) => {
      //   if (err) resp.send(err);
      //   resp.send(provider);
      // });
    };
  }

  static createProvider() {
    return async (req, resp) => {
      const { name, contact, providerName, CNPJ, providerAdress } = req.body;

      const provider = new Provider({
        name,
        contact,
        providerName,
        CNPJ,
        providerAdress,
      });

      await provider.save((err) => {
        if (err) return err;
      });

      resp.send("Welcome to our Marketplace!");
    };
  }

  static updateProvider() {
    return (req, resp) => {
      try {
        Provider.updateOne({ _id }, { ...req.body });
        resp.send({ modified: true }).json();
      } catch (err) {
        resp.send(err);
      }
    };
  }

  static deleteProvider() {
    return async (req, resp) => {
      await Provider.findOneAndDelete({ CNPJ: req.body.CNPJ }, (err) => {
        if (err) return err;
      });

      resp.send("Provider Deleted");
    };
  }
}

module.exports = ProviderController;
