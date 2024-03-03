const { mongoose, Types } = require("mongoose");

const TokenModel = mongoose.Schema({
  user: { type: Types.ObjectId, ref: "User" },
  refreshToken: { type: String, required: true },
});

module.exports = mongoose.model("Token", TokenModel);
