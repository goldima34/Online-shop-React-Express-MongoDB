const mongoose = require("mongoose");
const Category = require("./CategoryModel");

const Item = mongoose.Schema({
  name: { type: String, unique: false },
  type: { type: String, unique: false },
  brand: { type: String, unique: false },
  category: { type: String, unique: false },
  price: { type: Number, unique: false },
  color: { type: String, unique: false },
  size: { type: String, unique: false },
  availability: { type: Boolean, unique: false },
  img: [{ type: String, unique: false }],
});

module.exports = mongoose.model("Item", Item);
