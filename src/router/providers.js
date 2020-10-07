const ProviderController = require("../controllers/providers");

module.exports = (app) => {
    
    app.get("/providers", ProviderController.allProviders());

    app.get("/providers/:id", ProviderController.byProviderId());

    app.post("/newprovider", ProviderController.createProvider());

    app.put("providers/:id", ProviderController.updateProvider());

    app.delete("providers/:CNPJ", ProviderController.deleteProvider());
};
