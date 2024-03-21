const express = require("express");
const router = express.Router();
// controler

const { register, login, logout } = require("../controller/authController");

// non api

// Create

// // GET all blogs, GET, PATCH, DELETE a single blog
router.route("/signup").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);

module.exports = router;
