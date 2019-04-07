const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("../../passport")

router
  // Matches with "/user/signup"
  .route("/signup")
  .post(userController.create);

router
  // Matches with "/user/login"
  .route("/login")
  .post(passport.authenticate('local'), userController.login);

  // Matches with "/user/"
router.route("/").get(userController.getUser)

// Match with user/logout
router.route("/logout").post(userController.logout)

module.exports = router;
