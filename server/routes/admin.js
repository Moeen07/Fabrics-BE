const express = require("express");
const router = express.Router();

const { register, login, logout } = require("../controllers/admin");

// Register
router.post("/register", register);

// Login
router.post("/login", login);

// Logout
router.get("/logout", logout);

module.exports = router;
