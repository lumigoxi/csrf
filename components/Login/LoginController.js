const { Router } = require("express");

const { findUserByEmail } = require("./LoginService");

const route = Router();

route.post("/", async (req, res) => {
  try {
    const user = await findUserByEmail(req);
    req.session.user = user;
    res.redirect("/home");
  } catch (err) {
    res.render("login", { error: err.message });
  }
});

route.get("/", (req, res) => {
  res.render("login");
});

module.exports = route;
