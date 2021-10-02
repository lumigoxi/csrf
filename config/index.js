const config = {
  appPort: process.env.APP_PORT || 5000,
  appHost: process.env.DB_HOST || "localhost",
};

module.exports = config;
