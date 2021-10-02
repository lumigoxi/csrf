const express = require("express");
const viewEngine = require("./config/viewEngine");
const { appPort } = require("./config");
const { appHost } = require("./config");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);
viewEngine(app);
app.get("/login", (req, res) => {
  res.render("login");
});

app.listen(appPort, () => {
  console.log(`APP funcionando en http://${appHost}:${appPort}`);
});
