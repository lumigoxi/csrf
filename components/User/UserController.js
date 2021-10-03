const { Router } = require("express");
const login = require("../../middlewares/auth");

const { UpdateUser } = require("./UserService");

const route = Router();

route.get("/edit", login, async (req, res) => {
  try {
    res.render("edit");
  } catch (error) {
    res.send("You have to auth");
  }
});

route.post("/edit", login, async (req, res) => {
  const user = await UpdateUser(req.session, req.body.password);
  req.session.user = user;
  res.send("Email was changed");
});

module.exports = route;
