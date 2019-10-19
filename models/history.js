const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historySchema = new Schema({
  date: { type: String, required: true },
  score: { type: Number, required: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  game: {
    type: Schema.Types.ObjectId,
    ref: "Game"
  }
});

const History = mongoose.model("History", historySchema);

module.exports = History;
