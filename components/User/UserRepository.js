const UserModel = require("./UserModel");

const update = async (email, password) => {
  try {
    const user = await UserModel.findByEmailAndUpdate(email, password);
    return user;
  } catch (error) {
    console.log("[UserRepository] " + error.message);
  }
};

const findByEmail = async (email) => {
  try {
    const user = await UserModel.findByEmail(email);
    return user;
  } catch (error) {
    console.log("[UserRepository] " + error.message);
    throw new Error("credentials is invalid");
  }
};

module.exports = {
  update,
  findByEmail,
};
