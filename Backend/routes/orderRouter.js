const express = require("express");
const {
  newOrder,
  getSingleOrder,
  getLoggedInOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const {
  isAuthenticated,
  isAuthorizedRole,
} = require("../utils/AuthenticationOfUsers");
const router = express.Router();

router.route("/order/place").post(isAuthenticated, newOrder);
router
  .route("/order/:id")
  .get(isAuthenticated, isAuthorizedRole("admin"), getSingleOrder)
  .put(updateOrder)
  .delete(deleteOrder);
router.route("/orders/me").get(isAuthenticated, getLoggedInOrders);
router
  .route("/orders/all")
  .get(isAuthenticated, isAuthorizedRole("admin"), getAllOrders);

module.exports = router;
