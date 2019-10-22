const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, min: [8, "Not strong enough"] },
  guardianPass: { type: String, required: false },
  history: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "History"
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
