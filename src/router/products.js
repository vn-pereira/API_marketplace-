const ProductController = require("../controllers/products");

module.exports = (app) => {
  app.get("/products", ProductController.getAllProducts());
  app.get("/products/:idProvider", ProductController.getAllByProvider());
  app.get(
    "/products/:idProvider/:idProduct",
    ProductController.getProductByProviderId()
  );
  app.post("/products/new-product", ProductController.createProduct());
  app.put("/products/:id", ProductController.updateProduct());
  app.delete("/products/:id", ProductController.deleteProduct());
};
