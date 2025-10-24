const express = require("express");
const router = express.Router();
const { changePassword } = require("../controllers/changePasswordController");
const { loginUser } = require("../controllers/loginController");
const { authenticateToken } = require("../middlewares/authenticate");
const { registerUser } = require("../controllers/registerController");
const { getExampleTable } = require("../controllers/examplesController");

router.post("/login", loginUser);
router.post("/register", registerUser);

router.post("/changePassword", authenticateToken, changePassword);
router.get("/example", authenticateToken, getExampleTable);

module.exports = { router };
