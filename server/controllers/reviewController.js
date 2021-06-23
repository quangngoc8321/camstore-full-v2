var mongoose = require('mongoose');
const Product = require("../models/Product");
const Review = require("../models/Review");

// GET ALL
exports.getAllReviews = async (req, res, next) => {
  try {
    const { pageNumber = 1, productId } = req.query;

    const total = await Review.countDocuments({productId});
    const pageSize = 2;
    const skip = (pageNumber - 1) * pageSize;
    const sort = { createdAt: -1 };

    const reviews = await Review.find({productId}).populate("user", "_id name avatar").skip(skip).limit(pageSize).sort(sort);
    res.status(200).json({
      success: true,
      total,
      reviews,
      pageSize,
    });
  } catch (error) {
    console.log(error);
  }
};

// CREATE
exports.createOneReview = async (req, res, next) => {
  try {
    const { _id: uid } = req.user;
    const { productId } = req.body;
    req.body.uid = uid;

    const review = await Review.create(req.body);

    const caculateReview = await Review.aggregate([
      { $match: { productId: mongoose.Types.ObjectId(productId) } },
      {
        $group: {
          _id: null,
          ratingAvg: { $avg: "$ratingPoint" },
          totalReviews: { $sum: 1 },
        },
      },
    ]);

    const {ratingAvg, totalReviews} = caculateReview[0];
    await Product.findByIdAndUpdate(productId,{ratingAvg,totalReviews},{new: true} );

    res.status(200).json({
      success: true,
      review,
    });
  } catch (error) {
    next(error);
  }
};


