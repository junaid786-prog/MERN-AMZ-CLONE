const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

  shippingInfo: {
    shippingAddress: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: true,
  },

  orderedProducts: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      product: {
        type: mongoose.Schema.ObjectId,
        ref: "product",
        required:true
      },
    },
  ],
  paymentInfo: {
    id: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  itemsPrice: {
    type: Number,
    required: true,
  },
  paidAt: {
    type: Date,
    required: true,
  },
  taxPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  shippingPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  orderStatus: {
    type: String,
    required: true,
    default: "Processing",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  DeliveredAt: String,
});

module.exports = mongoose.model("order", orderSchema);
