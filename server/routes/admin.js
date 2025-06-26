const router = require("express").Router();
const { changeOrderStatus, getOrderAdmin } = require("../controllers/admin");
const { authCheck, adminCheck } = require("../middlewares/authCheck");

router.route("/admin/order-status").put(authCheck, adminCheck, changeOrderStatus);
router.route("/admin/orders").get(authCheck, adminCheck, getOrderAdmin);

module.exports = router;
