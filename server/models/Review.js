const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reviewSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "Review content is required"],
      trim: true,
      maxLength: [200, "Review max-length is 200 characters"],
    },
    uid: { type: Schema.Types.ObjectId, ref: 'User' },
    productId: { type: Schema.Types.ObjectId, ref: 'Product' },
    ratingPoint: {
      type: Number,
      trim: true,
      required: [true, "Rating point is required"],
    },
  },
  {
    timestamps: true,
  }
);

reviewSchema.virtual('user',{
  ref: 'User',
  localField: 'uid',
  foreignField: '_id',
  justOne: true
});
reviewSchema.set('toObject', { virtuals: true });
reviewSchema.set('toJSON', { virtuals: true });

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
