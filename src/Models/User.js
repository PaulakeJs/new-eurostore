const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
    },
    verified: {
      type: Boolean,
      required: true,
      default: false,
    },
    token: {
      type: String,
    },
    status: {
      type: String,
      default: "active",
    },
    role: {
      type: String,
      required: true,
      default: "User",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Users", userSchema);

module.exports = User;
