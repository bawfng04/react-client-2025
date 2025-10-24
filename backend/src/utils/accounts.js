const { pool } = require("../database/database");

async function checkIfUserExists(username) {
  try {
    const query = `SELECT * FROM USERS WHERE username = $1`;
    const result = await pool.query(query, [username]);
    // return id
    if (result.rows.length > 0) {
      console.log("CheckIfUserExists: User found with ID:", result.rows[0].id);
      return {
        user_id: result.rows[0].id,
      }
    }
    else {
      console.log("CheckIfUserExists: User not found");
      return null;
    }
  } catch (error) {
    throw error;
  }
}

async function isCorrectPassword(username, password) {
  try {
    const query = `SELECT * FROM USERS WHERE username = $1 AND password = $2`;
    const result = await pool.query(query, [username, password]);
    return result.rows.length > 0;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  checkIfUserExists,
  isCorrectPassword,
};
