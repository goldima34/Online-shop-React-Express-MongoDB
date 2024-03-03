import mongoose, { Types } from "mongoose";

const TokenModel = mongoose.Schema({
  user: { type: Types.ObjectId, ref: "User" },
  refreshToken: { type: String, required: true },
});

export default mongoose.model("Token", TokenModel);
