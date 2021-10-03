const { Router } = require("express");
const { getToken } = require("../../config/csrfToken");
const login = require("../../middlewares/auth");
const csrf = require("../../middlewares/csrf");

const { UpdateUser } = require("./UserService");

const route = Router();

route.get("/edit", login, async (req, res) => {
  try {
    const myToken = await getToken(req.session.user);
    res.render("edit", { token: myToken });
  } catch (error) {
    res.send("You have to auth" + error.message);
  }
});

route.post("/edit", login, csrf, async (req, res) => {
  try {
    const user = await UpdateUser(req.session, req.body.password);
    req.session.user = user;
    res.send("Email was changed");
  } catch (error) {}
});

module.exports = route;
