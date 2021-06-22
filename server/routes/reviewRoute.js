const express = require("express");
const {
  getAllReviews,
  createOneReview,
} = require("../controllers/reviewController");

const { isUser } = require("../middlewares/isUser");

const Router = express.Router();

Router.route("/").get(getAllReviews).post(isUser, createOneReview);

module.exports = Router;
