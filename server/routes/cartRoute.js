const express = require("express");
const {
  getAllCartItems,
  createCartItem,
  updateCartItem,
  deleteCartItem,
} = require("../controllers/cartController");


const Router = express.Router();

Router.route("/").get(getAllCartItems).post( createCartItem).put(updateCartItem).delete(deleteCartItem);
module.exports = Router;
