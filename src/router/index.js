const routesProducts = require("./products");
const routesProviders = require("./providers");
const routesPurchases = require("./purchases");
const routesUsersRoute = require("./users");

module.exports = (app) => {
  routesProducts(app);
  routesProviders(app);
  routesPurchases(app);
  routesUsersRoute(app);
};
