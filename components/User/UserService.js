const UserRepository = require("./UserRepository");

const UpdateUser = async () => {
  // if (!id) {
  //   throw new Error("El id es requerido");
  // }

  try {
    const user = await UserRepository.update();
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
