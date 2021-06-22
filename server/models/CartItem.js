const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cartItemSchema = new mongoose.Schema(
  {
    sessionId: {type: String, required: true},
    productId: { type: Schema.Types.ObjectId, ref: 'Product' },
    quantity: {type: Number, required: true, default: 1},
    subTotal: {type: Number, required: true, default: 1},
  },
  {
    timestamps: true,
  }
);

cartItemSchema.virtual('product',{
  ref: 'Product',
  localField: 'productId',
  foreignField: '_id',
  justOne: true
});
cartItemSchema.set('toObject', { virtuals: true });
cartItemSchema.set('toJSON', { virtuals: true });



const CartItem = mongoose.model("CartItem", cartItemSchema);

module.exports = CartItem;
