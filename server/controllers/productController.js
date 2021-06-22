const Product = require("../models/Product");
const cloudinary = require("../configs/cloudinaryConfig");
const slugify = require("slugify");

// GET ALL
exports.getAllProducts = async (req, res,next) => {
  try {
    const { search = "", pageNumber = 1, price = null, ...filter } = req.query;
    const queryString = search
      ? {
          ...filter,
          name: {
            $regex: search,
            $options: "i",
          },
        }
      : filter;

    const total = await Product.countDocuments(queryString);
    const pageSize = 8;
    const skip = (pageNumber - 1) * pageSize;
    const sort = price ? { price: Number(price) } : { createdAt: -1 };

    const products = await Product.find(queryString)
      .skip(skip)
      .limit(pageSize)
      .sort(sort);
    res.status(200).json({
      success: true,
      total,
      products,
      pageSize,
    });
  } catch (error) {
    console.log(error);
  }
};

// GET ONE
exports.getOneProduct = async (req, res,next) => {
  try {
    const { slug } = req.params;
    const product = await Product.findOne({ slug });
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    next(error);
  }
};

// CREATE
exports.createOneProduct = async (req, res,next) => {
  try {
    const { name, price, image } = req.body;
    const result = await cloudinary.v2.uploader.upload(image, {
      folder: "cameraStoreV2/product",
    });
    req.body.image = { public_id: result.public_id, url: result.secure_url };
    req.body.slug = slugify(name, { strict: true });
    req.body.price = Number(price);
    const product = await Product.create(req.body);
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE
exports.updateOneProduct = async (req, res,next) => {
  try {
    const { slug } = req.params;
    const { name, image, newImage = null } = req.body;
    req.body.slug = slugify(name, { strict: true });
    if (newImage) {
      const result = await cloudinary.v2.uploader.upload(newImage, {
        folder: "cameraStoreV2/product",
      });
      req.body.image = { public_id: result.public_id, url: result.secure_url };
      await cloudinary.v2.uploader.destroy(image.public_id);
    }
    const product = await Product.findOneAndUpdate({ slug }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
        success: true,
        product,
      });
  } catch (error) {
    next(error)
  }
};

// DELETE
exports.deleteOneProduct = async (req, res,next) => {
  try {
    const { slug } = req.params;
    const { image} = req.body;
    await cloudinary.v2.uploader.destroy(image.public_id);
    await Product.findOneAndDelete({slug});
    res.status(200).json({
        success: true,
        message: "Product Deleted"
    })
  } catch (error) {
    next(error)
  }
};
