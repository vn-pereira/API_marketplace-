const userController = require("../controllers/user");

module.exports = (app) => {
  app.get("/user/list", userController.getAll());
  app.get("/user/:id", userController.getById());
  app.post("/new-user", userController.insertUser());
  app.get("/update-user", userController.updateUser());
  app.delete("/user/delete/:id", userController.deleteUser());
};
