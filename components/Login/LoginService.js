const UserService = require("../User/UserService");

const findUserByEmail = async ({ body: data }) => {
  if (!data.email || !data.password) {
    throw new Error("Email is required");
  }

  try {
    const result = await UserService.findUserByEmail(data.email);
    const compare = result.password === data.password;
    if (!compare) {
      throw new Error("credentials is invalid");
    }
    return result.email;
  } catch (error) {
    console.log("[LoginService] " + error.message);
    throw new Error("credentials is invalid");
  }
};

module.exports = {
  findUserByEmail,
};
