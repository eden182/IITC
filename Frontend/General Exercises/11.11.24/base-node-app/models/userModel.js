const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstN: {
    type: String,
    required: true,
  },
  lastN: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userN: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("User", userSchema);
