const express = require("express");
const {
    getMyOrders,
    getCustomerOrders,
    createOrder,
    createCheckOutSession,
    getOrder,
    updateOrder
} = require("../controllers/orderController");

const { isAdmin } = require("../middlewares/isAdmin");
const { isUser } = require("../middlewares/isUser");


const Router = express.Router();
Router.route("/my-orders").get(isUser, getMyOrders)
Router.route("/customer-orders").get(isUser,isAdmin, getCustomerOrders)

Router.route("/stripe").post(isUser, createOrder, createCheckOutSession)
Router.route("/stripe").put(isUser, getOrder, createCheckOutSession)

Router.route("/webhook").post(express.raw({type: 'application/json'}), updateOrder)

module.exports = Router;
