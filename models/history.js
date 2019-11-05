const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historySchema = new Schema({
  date: { type: String, required: true },
  score: { type: Number, required: true },
  time: { type: Number, required: true },
  game: {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true }
  }
});

const History = mongoose.model("History", historySchema);

module.exports = History;
