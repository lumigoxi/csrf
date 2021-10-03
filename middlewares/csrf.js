const { verifyToken } = require("../config/csrfToken");

const csrf = async (req, res, next) => {
  if (!req.body.token) {
    res.redirect("/login");
  }

  if (await verifyToken(req.body.token, req.session.user)) {
    next();
  }
  res.redirect("/login");
};

module.exports = csrf;
