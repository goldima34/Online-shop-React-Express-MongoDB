const mongoose = require("mongoose");
const Category = require("./CategoryModel")

const Item = mongoose.Schema({
  name: { type: String, required: true, unique: false },
  type: { type: String, unique: false },
  brand: { type: String, unique: false },
  category: { type: String, required: true, unique: false },
  price: { type: Number, required: true, unique: false },
  color: { type: String, unique: false },
  size: { type: String, unique: false },
  availability: { type: Boolean, required: true, unique: false },
  img: [{ type: String, required: true, unique: false }],
});

module.exports = mongoose.model("Item", Item);
