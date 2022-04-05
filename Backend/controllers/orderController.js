const Order = require("../models/OrderModel");
const Product = require("../models/ProductModel");

// =================== Order Product ==============/
// 1. Create New Order

exports.newOrder = async (req, res) => {
  const {
    shippingInfo,
    orderedProducts,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    orderStatus,
  } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderedProducts,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    orderStatus,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    message: "order placed successfully",
    order,
  });
};

//  Get Single Order --- FOR ADMIN

exports.getSingleOrder = async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (!order) {
    return res
      .status(400)
      .json({ message: "order with this id is not present" });
  }

  res.status(200).json({
    success: true,
    order,
  });
};

// Get Orders Of Person Logged In

exports.getLoggedInOrders = async (req, res) => {
  const order = await Order.find({ user: req.user._id });

  if (!order) {
    return res.status(400).json({ message: "no order yet" });
  }

  res.status(200).json({
    success: true,
    order,
  });
};

// Get All Orders --- For Admin

exports.getAllOrders = async (req, res) => {
  const orders = await Order.find();

  if (!orders) {
    return res.status(400).json({ message: "no order yet" });
  }

  // calculating total price of all orders
  let totalPrice = 0;
  orders.forEach((order) => {
    totalPrice += order.itemsPrice;
  });
  res.status(200).json({
    success: true,
    orders,
    totalPrice,
  });
};

// Update Order Status - stock, qty, status -- admin
exports.updateOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order.orderStatus === "Delivered") {
    return res
      .status(200)
      .json({ message: "You have already delivered the product" });
  }
  // update order
  order.orderedProducts.forEach(
    async (order) =>{
      await updateStock(order.product, order.quantity);
    } 
    //here product.product is product refrence (id) present in orderedProducts
  );
  // admin will update status so new status will be passed
  order.orderStatus = req.body.status;
  if (req.body.status === "Delivered") {
    order.DeliveredAt = Date.now();
  }
  order.save({ validateBeforeSave: true });
  res.status(200).json({
    success: true,
    order,
  });
};

async function updateStock(id, quantity) {
  const product = await Product.findById(id);
  product.stock -= quantity;
  await product.save({validateBeforeSave:true})
};

exports.deleteOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    return res.status(400).json({ message: "no order yet" });
  }
  await order.remove();
  res.status(200).json({
    success: true,
    order,
  });
};