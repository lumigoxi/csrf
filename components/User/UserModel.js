const fs = require("fs").promises;
const path = require("path");

const findByIdAndUpdate = async () => {
  try {
    const data = await fs.readFile(
      path.resolve(__dirname, "../../mocks/UserMock.json"),
      "utf-8"
    );
    const result = await JSON.parse(data);
    return result;
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
  findByIdAndUpdate,
  findByEmail,
};
