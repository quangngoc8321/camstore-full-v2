const express = require("express");
const {
  getAllProducts,
  createOneProduct,
  getOneProduct,
  deleteOneProduct,
  updateOneProduct,
  getAllRelatedProducts,
} = require("../controllers/productController");
const { isAdmin } = require("../middlewares/isAdmin");
const { isUser } = require("../middlewares/isUser");

const Router = express.Router();
Router.route("/related-products").get(getAllRelatedProducts)
Router.route("/").get(getAllProducts).post(isUser, isAdmin, createOneProduct);
Router.route("/:slug")
  .get(getOneProduct)
  .put(isUser, isAdmin, updateOneProduct)
  .delete(isUser, isAdmin, deleteOneProduct);

module.exports = Router;
