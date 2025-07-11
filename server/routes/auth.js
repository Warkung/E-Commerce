const router = require("express").Router();

// controller
const { register, login, currentUser } = require("../controllers/auth");

// middleware
const { authCheck, adminCheck } = require("../middlewares/authCheck");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/current-user").post(authCheck, currentUser);
router.route("/current-admin").post(authCheck, adminCheck, currentUser);

module.exports = router;
