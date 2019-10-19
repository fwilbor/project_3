const router = require("express").Router();
const user = require("./user");
const history = require("./history");
const game = require("./game");

router.use("/user", user);
router.use("/game", game);
router.use("/history", history);

module.exports = router;
