const { pool } = require("../database/database");
const { checkIfUserExists } = require("../utils/accounts");

class RegisterModel {
  async addUser(username, password) {
    try {
      // trong db có id tự increase

      const query = `INSERT INTO USERS (username, password) VALUES ($1, $2)`;
      const result = await pool.query(query, [username, password]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async registerUser(username, password) {
    try {
      const isExistUsername = await checkIfUserExists(username);
      if (isExistUsername) {
        return { status: 409, message: "Username already exists" };
      } else {
        const result = await this.addUser(username, password);
        if (result.rowCount === 0) {
          return { status: 500, message: "Failed to register user" };
        }
        return { status: 200, message: "User registered successfully" };
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new RegisterModel();
