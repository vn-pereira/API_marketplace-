const ProductController = require("../controllers/products");

module.exports = (app) => {
  app.get("/products", ProductController.getAllProducts());
  app.get("/products/:providerID", ProductController.getAllByProvider());
  app.get(
    "/products/:providerID/:productID",
    ProductController.getProductByProviderId()
  );
  app.post("/products/new-product", ProductController.createProduct());
  app.put("/products/:id", ProductController.updateProduct());
  app.delete("/products/:id", ProductController.deleteProduct());
};
