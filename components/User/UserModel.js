const fs = require("fs").promises;
const path = require("path");

const findByEmailAndUpdate = async (myEmail, newPassword) => {
  try {
    const data = await fs.readFile(
      path.resolve(__dirname, "../../mocks/UserMock.json"),
      "utf-8"
    );
    let userChanged = "";
    const users = await JSON.parse(data);
    users.forEach((user) => {
      if (user.email === myEmail) {
        user.password = newPassword;
        userChanged = user.email;
        return;
      }
    });
    console.log(userChanged);
    const newJson = JSON.stringify(users);
    const result = await fs.writeFile(
      path.resolve(__dirname, "../../mocks/UserMock.json"),
      newJson
    );
    console.log(result);
    return userChanged;
  } catch (error) {
    console.log("[UserModel] " + error.message);
  }
};

const findByEmail = async (myEmail) => {
  try {
    const data = await fs.readFile(
      path.resolve(__dirname, "../../mocks/UserMock.json"),
      "utf-8"
    );
    const result = await JSON.parse(data);
    const user = result.find(({ email }) => email === myEmail);
    if (!user) {
      throw new Error("credentials is invalid");
    }
    return user;
  } catch (error) {
    console.log("[UserModel] " + error.message);
    throw new Error("credentials is invalid");
  }
};

module.exports = {
  findByEmailAndUpdate,
  findByEmail,
};
