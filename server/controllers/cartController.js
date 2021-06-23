var mongoose = require("mongoose");

const CartItem = require("../models/CartItem");

// GET ALL
exports.getAllCartItems = async (req, res, next) => {
  try {

    const { id: sessionId } = req.session;
     const {  pageNumber = 1 } = req.query;

    const caculateTotal = await CartItem.aggregate([
      { $match: { sessionId } },
      {
        $group: {
          _id: null,
          totalItems: { $sum: "$quantity" },
          totalPrice: { $sum: "$subTotal" },
        },
      },
    ]);

    
    let totalItems= 0
    let totalPrice= 0;
    if(caculateTotal.length > 0) {
      totalItems = caculateTotal[0].totalItems
      totalPrice = caculateTotal[0].totalPrice
    }

    const pageSize = 4;
    const skip = (pageNumber - 1) * pageSize;
    const sort = { createdAt: -1 };
    const total = await CartItem.countDocuments({ sessionId });

    const cartItems = await CartItem.find({ sessionId }).populate("product")
    .skip(skip)
    .limit(pageSize)
    .sort(sort);

    res.status(200).json({
      success: true,
      cartItems,
      totalItems,
      totalPrice,
      total,
      pageSize
    });
  } catch (error) {
    console.log(error);
  }
};

// CREATE
exports.createCartItem = async (req, res, next) => {
  try {
    const { quantity = 1, price} = req.body;
    const { id: sessionId } = req.session;
    req.body.sessionId = sessionId;
    req.body.subTotal = quantity * price;
    const cartItem = await CartItem.create(req.body);
    res.status(200).json({
      success: true,
      cartItem,
    });
  } catch (error) {
    next(error);
  }
};

// CREATE
exports.updateCartItem = async (req, res, next) => {
  try {
    const { quantity = 1, price, productId } = req.body;
    const { id: sessionId } = req.session;
    req.body.subTotal = quantity * price;
    const cartItem = await CartItem.findOneAndUpdate(
      { productId, sessionId },
      req.body,
      { new: true }
    );
    res.status(200).json({
      success: true,
      cartItem,
    });
  } catch (error) {
    next(error);
  }
};
exports.deleteCartItem = async (req, res, next) => {
  try {
    const { productId } = req.body;
    const { id: sessionId } = req.session;
    await CartItem.findOneAndDelete({ productId, sessionId });
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
