const router = require("express").Router();
const historyController = require("../../controllers/historyController");

router
  .route("/")
  .get(historyController.findAll)
  .post(historyController.create);

router
  .route("/:id")
  .get(historyController.findById)
  .put(historyController.update)
  .delete(historyController.remove);

module.exports = router;
