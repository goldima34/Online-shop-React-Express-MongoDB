const mongoose = require("mongoose");

const UserModel = mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  admin: { type: Boolean, default: false },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
});

module.exports = mongoose.model("User", UserModel);
