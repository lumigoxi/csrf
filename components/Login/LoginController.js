const { Router } = require("express");

const { findUserByEmail } = require("./LoginService");

const route = Router();

route.post("/", async (req, res) => {
  try {
    const user = await findUserByEmail(req);
    res.status(200).json({
      error: null,
      mensaje: "User has been finded",
      datos: user,
    });
  } catch (err) {
    res.status(500).json({
      error: "User wasn't finded",
      mensaje: err.message,
      datos: null,
    });
  }
});

module.exports = route;
