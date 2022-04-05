// schema to store a product in our database
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"], // [] -> if name is not entered this is message for that
  },
  description: {
    type: String,
    required: [true, "Please enter product description"], // [] -> if name is not entered this is message for that
  },
  price: {
    type: Number,
    required: [true, "Please enter price"], // [] -> if name is not entered this is message for that
    maxlength: [6, "can not exceed from 6 chars"],
  },
  images: [
    {
      public_id: {
        // where these images will be hosted an id and url will be provided by hoster
        type: String,
        required: [true, "insert product image"],
      },
      url: {
        type: String,
        required: [true, "insert product image"],
      },
    },
  ],
  stock: {
    type: Number,
    required: [true, "Enter product stock"],
  },
  category: {
    type: String,
    required: [true, "enter product category"],
  },
  noOfReviews: {
    type: Number,
    default: 0,
  },
  productRating: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      userId: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true,
      },
      reviewerName: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: [true, "Enter comment"],
      },
    },
  ],
});

module.exports = mongoose.model("Product", productSchema);
// Product is our collection in data base and product schema is model
