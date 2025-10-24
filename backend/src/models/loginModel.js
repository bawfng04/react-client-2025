const { pool } = require("../database/database");
const { checkIfUserExists, isCorrectPassword } = require("../utils/accounts");

class LoginModel {
  async loginUser(username, password) {
    try {
      const isExistUsername = await checkIfUserExists(username);
      if (!isExistUsername) {
        return { status: 409, message: "Username not found" };
      } else {
        const isCorrect = await isCorrectPassword(username, password);
        if (isCorrect) {
          console.log("token: ", "username: ", username, "user_id: ", isExistUsername.user_id);
          return {
            status: 200,
            message: "Login successful",
            username: username,
            userId: isExistUsername.user_id,
          };
        } else {
          return { status: 401, message: "Incorrect password" };
        }
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new LoginModel();
