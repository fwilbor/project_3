const router = require("express").Router();
const userController = require("../../controllers/userController");
const seeds = require("../../models/seed");

router
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

router.route("/seeds").get(seeds);

module.exports = router;
