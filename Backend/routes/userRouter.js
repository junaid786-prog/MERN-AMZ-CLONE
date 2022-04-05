const express = require("express");
const {
  giveProductReview,
  getAllReviews,
  deleteReview,
} = require("../controllers/ProductController");
const {
  registerUser,
  loginUser,
  logoutUser,
  userProfile,
  updatePassword,
  updateProfile,
  getAllUsers,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require("../controllers/userController");
const {
  isAuthenticated,
  isAuthorizedRole,
} = require("../utils/AuthenticationOfUsers");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/profile").get(isAuthenticated, userProfile);
router.route("/update/password").put(isAuthenticated, updatePassword);
router.route("/update/profile").put(isAuthenticated, updateProfile);
router
  .route("/admin/users")
  .get(isAuthenticated, isAuthorizedRole("admin"), getAllUsers);
router
  .route("/admin/user/:id")
  .get(isAuthenticated, isAuthorizedRole("admin"), getSingleUser)
  .put(isAuthenticated, isAuthorizedRole("admin"), updateUserRole)
  .delete(isAuthenticated, isAuthorizedRole("admin"), deleteUser);
router.route("/product/review").post(isAuthenticated, giveProductReview);
router
  .route("/product/review")
  .get(getAllReviews)
  .delete(isAuthenticated, isAuthorizedRole("admin"), deleteReview);
module.exports = router;
