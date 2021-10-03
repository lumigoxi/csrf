const csrfToken = require("csrf");

const tokens = csrfToken();

const getToken = async (secret) => {
  try {
    const token = await tokens.create(secret);
    return token;
  } catch (error) {
    throw new Error("Can't get secret");
  }
};

const verifyToken = async (token, secret) => {
  try {
    const result = await tokens.verify(secret, token);
    console.log(result);
    return result;
  } catch (error) {
    throw new Error("Can't get secret");
  }
};

module.exports = {
  getToken,
  verifyToken,
};
