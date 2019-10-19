const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  history: {
    type: Schema.Types.ObjectId,
    ref: "History"
  }
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
