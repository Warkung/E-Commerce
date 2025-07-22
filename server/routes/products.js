const router = require("express").Router();
// import product
const {
  createProduct,
  listProducts,
  removeProduct,
  listBy,
  searchFilters,
  updateProduct,
  read,
  upLoadImages,
  removeImages,
} = require("../controllers/products");

// import middleware
const { authCheck, adminCheck } = require("../middlewares/authCheck");

// Product
router.route("/product").post(authCheck, adminCheck, createProduct);
router.route("/products/:count").get(listProducts);
router.route("/product/:id").get(read);
router
  .route("/product/:id")
  .put(authCheck, adminCheck, updateProduct)
  .patch(authCheck, adminCheck, updateProduct);
router.route("/product/:id").delete(authCheck, adminCheck, removeProduct);
router.route("/productby").post(listBy);
router.route("/search/filters").post(searchFilters);

// Images
router.route("/images/upload").post(authCheck, adminCheck, upLoadImages);
router.route("/images/remove").post(authCheck, adminCheck, removeImages);

module.exports = router;
