const express = require("express");
const { createProduct, ReadProducts, updateProduct, deleteProduct, getProductDetails } = require("../controllers/ProductController");
const { isAuthenticated, isAuthorizedRole } = require("../utils/AuthenticationOfUsers");
const router = express.Router();

// Now create routes
router.route('/admin/products/new').post(isAuthenticated, isAuthorizedRole("admin"), createProduct);
router.route('/products').get(ReadProducts);
router.route('/products/:id').get(getProductDetails);
router.route('/admin/products/:id').put(isAuthenticated, isAuthorizedRole("admin"), updateProduct).get(getProductDetails); // same route for both requests so can combine
router.route('/admin/products/:id').delete(isAuthenticated, isAuthorizedRole("admin"), deleteProduct);
 // here {ist part} is telling about route and {get} is request type and what will be response is in third part
 // we have a seperate folder for response called controllers and import it
 
module.exports= router;