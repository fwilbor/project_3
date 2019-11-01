const router = require("express").Router();
const gameController = require("../../controllers/gameController");

router
  .route("/")
  .get(gameController.findAll)
  .post(gameController.create);

router.route("/name/:name").get(gameController.findByName);
router.route("/admin/create").post(gameController.createAdmin);

router
  .route("/:id")
  .get(gameController.findById)
  .put(gameController.update)
  .delete(gameController.remove);

module.exports = router;
