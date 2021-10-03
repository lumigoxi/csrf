const express = require("express");
const session = require("express-session");

const viewEngine = require("./config/viewEngine");
const { appPort } = require("./config");
const { appHost } = require("./config");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

routes(app);
viewEngine(app);

app.get("/home", (req, res) => {
  res.render("home");
});

app.listen(appPort, () => {
  console.log(`APP funcionando en http://${appHost}:${appPort}`);
});
