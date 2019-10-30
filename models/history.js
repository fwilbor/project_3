const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var gameSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true }
});

const historySchema = new Schema({
  date: { type: String, required: true },
  score: { type: Number, required: true },
  game: gameSchema
});

const History = mongoose.model("History", historySchema);

module.exports = History;
