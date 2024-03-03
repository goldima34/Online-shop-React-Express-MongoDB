import mongoose from "mongoose";

const Item = mongoose.Schema({
  name: { type: String, required: true, unique: false },
  type: { type: String, required: true, unique: false },
  brand: { type: String, required: true, unique: false },
  price: { type: Number, required: true, unique: false },
  color: { type: String, required: true, unique: false },
  size: { type: String, required: true, unique: false },
  availability: { type: Boolean, required: true, unique: false },
  img: [{ type: String, required: true, unique: false }],
});

export default mongoose.model("Item", Item);
