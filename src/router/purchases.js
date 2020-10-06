const PurchaseController = require("../controllers/purchases");

module.exports = (app) => {
  app.get("/purchases/list", PurchaseController.getAll());

  app.get("/purchases/product/:id", PurchaseController.getByProductId());

  app.get("/purchases/user/:id", PurchaseController.getByUserId());

  app.post("/new-purchase", PurchaseController.createPurchase());

  app.delete("/purchase/:id", PurchaseController.deletePurchase());
};
