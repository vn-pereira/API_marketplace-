const ProductController = require("../controllers/products");

module.exports = (app) => {
    app.get("/products", ProductController.getAllProducts());
    app.get("/products/:idProvider", ProductController.getAllByProvider())
    app.get("/products/:id", ProductController.getByProductId());
    app.get("/products/:name", ProductController.getByProductName());
    app.post("/products/new-product", ProductController.insertProduct());
    app.delete("/products/:id", ProductController.deleteProduct());
    app.put("/products/:id", ProductController.updateProduct());
};

