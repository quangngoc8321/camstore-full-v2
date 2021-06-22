const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new mongoose.Schema(
  {
    uid: { type: Schema.Types.ObjectId, ref: 'User' },
    orderItems: [],
    totalPrice: {type: Number, required: true},
    isPaid: {type: Boolean, required: true, default: false},
    shippingDetails: {
        name: {type: String},
        address:  {type: String},
        email:  {type: String}
    }
  },
  {
    timestamps: true,
  }
);


const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
