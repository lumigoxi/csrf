const UserRepository = require("./UserRepository");

const UpdateUser = async ({ user: email }, password) => {
  try {
    if (!password) {
      throw new Error("Password is required");
    }
    const user = await UserRepository.update(email, password);
    return user;
  } catch (error) {
    console.log("[UserService] " + error.message);
    throw new Error("Internal Server Error");
  }
};

const findUserByEmail = async (email) => {
  if (!email) {
    throw new Error("Email is required");
  }

  try {
    const user = await UserRepository.findByEmail(email);
    return user;
  } catch (error) {
    console.log("[UserService] " + error.message);
    throw new Error("credentials is invalid");
  }
};

module.exports = {
  UpdateUser,
  findUserByEmail,
};
