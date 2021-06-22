const express = require("express");
const { login, getCurrentUser, register } = require("../controllers/authController");
const { isUser } = require("../middlewares/isUser");
const Router = express.Router();

Router.route("/").get(isUser, getCurrentUser)
Router.route("/login").post(login)
Router.route("/register").post(register)

module.exports = Router;