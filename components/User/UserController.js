const { Router } = require("express");
const login = require("../../middlewares/auth");

// const { UpdateUser } = require("./UserService");

const route = Router();

route.get("/edit", login, async (req, res) => {
  try {
    res.send("Form Edit Password");
  } catch (error) {
    res.send("You have to auth");
  }
});

module.exports = route;
