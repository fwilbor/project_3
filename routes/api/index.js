const router = require("express").Router();
const user = require("./user");
const history = require("./history");
const game = require("./game");

router.use("/user", user);
router.use("/history", history);
router.use("/game", game);

module.exports = router;
