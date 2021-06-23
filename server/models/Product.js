const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      unique: true,
      lowercase: true,
      maxLength: [200, "Name max-length is 260 characters"],
    },
    slug: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
      unique: true,
    },
    image: {
      public_id: {
        type: String,
        required: true,
        default: "public_id",
      },
      url: {
        type: String,
        required: true,
        default: "url",
      },
    },
   
    description: {
      type: String,
      trim: true,
      required: [true, "Product description is required"],
      maxLength: [500, "Description max-length is 500 characters"],
    },
    price: {
      type: Number,
      trim: true,
      required: [true, "Product price is required"],
    },
    totalReviews: {
      type: Number,
      trim: true,
      default: 0
    },
    ratingAvg: {
      type: Number,
      trim: true,
      default: 0
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
