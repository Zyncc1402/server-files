const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    username: {
      type: String,
      unique: true,
      lowercase: true,
    },
    email: String,
    password: String,
    phone: Number,
    website: String,
    address: {
      street: String,
      suite: String,
      city: String,
      zipcode: String,
    },
    company: {
      name: String,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
