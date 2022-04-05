// All responses to the requests are written here

const Product = require("../models/ProductModel");
const APIFeatures = require("../utils/ApiFeatures");

// Creating API

// 1. Create A Product

exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);

  res.status(200).json({
    success: true,
    product,
  });
};

// 2. Read All Products

exports.ReadProducts = async (req, res) => {
  const ResultPerPage = 5;
  const apiFeatures = new APIFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagenation(ResultPerPage);
  //console.log(totalProducts);
  const products = await apiFeatures.query;
  //const products = await Product.find();
  let totalProducts = await Product.countDocuments();
  res.status(201).json({
    success: true,
    products,
    totalProducts,
    ResultPerPage,
  });
};

// 3. Update A Product

exports.updateProduct = async (req, res) => {
  let product = Product.findById(req.params.id);
  if (!product) {
    res.status(501).json({
      success: false,
      message: "product with this id is not present",
    });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
};

// 4. Delete A Product

exports.deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(501).json({
      success: false,
      message: "product with this id is not present",
    });
  }

  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product deleted",
  });
};

// Get a single product

exports.getProductDetails = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(501).json({
      success: false,
      message: "product with this id is not present",
    });
  }

  res.status(200).json({
    success: true,
    product,
  });
};

// ============================== Product Reviews ========================= //
// 1. Give A Review
exports.giveProductReview = async (req, res) => {
  // Review Body
  const productReview = {
    userId: req.user._id,
    reviewerName: req.user.name,
    rating: req.body.rating,
    comment: req.body.comment,
  };
  // Get Product
  const product = await Product.findById(req.body.id);
  if (!product) {
    res.status(401).json({ message: "product not found" });
  }
  const isReviewedByThisUser = await product.reviews.find(
    (review) => review.userId.toString() === req.user._id.toString()
  );

  // Firstly check if this product is not reviewed by this user (logged in)
  if (isReviewedByThisUser) {
    product.reviews.forEach((review) => {
      if (review.userId.toString() === req.user._id.toString()) {
        review.rating = req.body.rating;
        review.comment = req.body.comment;
      }
    });
  } else {
    product.reviews.push(productReview);
  }
  product.noOfReviews = product.reviews.length;
  let avgRating = 0;
  product.reviews.forEach((review) => {
    avgRating += Number(review.rating);
  });

  product.productRating = avgRating / product.reviews.length;

  await product.save({ validateBeforeSave: true });
  res.status(200).json({
    success: true,
    productReview,
  });
};
// Get All Reviews
exports.getAllReviews = async (req, res) => {
  const product = await Product.findById(req.query.productId);
  if (!product) {
    return res.status(401).json({ message: "product not found" });
  }
  res.status(401).json({
    success: true,
    reviews: product.reviews,
  });
};
// Delete A Review
exports.deleteReview = async (req, res) => {
  const product = await Product.findById(req.query.productId);
  if (!product) {
    return res.status(401).json({ message: "product not found" });
  }
  const reviewsAfterDeletion = product.reviews.filter(
    (review) => review.userId.toString() !== req.query.id.toString()
  );

  // updating no of reviews, product overall rating
  const noOfReviews = reviewsAfterDeletion.length;
  let avgRating = 0;
  reviewsAfterDeletion.forEach((review) => {
    avgRating += Number(review.rating);
  });

  const productRating = avgRating / reviewsAfterDeletion.length;

  await Product.findByIdAndUpdate(
    req.query.productId,
    {
      noOfReviews,
      productRating,
      reviews: reviewsAfterDeletion,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(401).json({
    success: true,
    reviewsAfterDeletion,
  });
};
