const {
  addCategory,
  litsCategory,
  removeCategory,
} = require("../controllers/category");
const { authCheck, adminCheck } = require("../middlewares/authCheck");

const router = require("express").Router();

router.route("/category").post(authCheck, adminCheck, addCategory).get(litsCategory);
router.route("/category/:id").delete(removeCategory);

module.exports = router;
