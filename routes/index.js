const UserController = require("../components/User/UserController");
const loginController = require("../components/Login/LoginController");
const routes = (app) => {
  app.use("/user", UserController);
  app.use("/login", loginController);
};

module.exports = routes;
