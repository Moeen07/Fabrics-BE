const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await Admin.findOne({ username });

    if (existingUser) {
      return res.status(409).json({ msg: "Username already taken" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Admin.create({
      username,
      password: hashedPassword,
    });
    res.status(201).json({ msg: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Admin.findOne({ username });
    if (!user) {
      return res.status(401).json({ msg: "Invalid Username/password" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ msg: "Invalid Username/password" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.cookie("token", token, { httpOnly: true });
    res.send("Login Confirmed");
  } catch (error) {
    console.log(error);
  }
};

const logout = async (req, res) => {
  res.clearCookie("token");
  res.json({ msg: "Logout Successful" });
};

module.exports = { register, login, logout };
