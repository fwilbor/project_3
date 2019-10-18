const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, min: [8, "Not strong enough"] },
  guardianPass: { type: String, required: false },
  games: { type: Array, required: false }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
