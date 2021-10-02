const { Router } = require("express");

// const { UpdateUser } = require("./UserService");

const route = Router();

route.get("/edit", async (req, res) => {
  res.send("Form Edit Password");
});

module.exports = route;
