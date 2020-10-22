const userController = require("../controllers/users");

module.exports = (app) => {
  app.get("/user/list", userController.getAll());

  app.get("/user/:id", userController.getById());

  app.post("/new-user", userController.createUser());

  app.put("/update-user/:id", userController.updateUser());

  app.delete("/user/delete/:id", userController.deleteUser());
};
