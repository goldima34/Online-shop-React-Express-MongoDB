const mongoose = require("mongoose");
const Item = require("./ItemModel.js");

const BasketItem = mongoose.Schema({
  itemId: { type: String, require: true },
  count: { type: Number, default: 1 },
});

module.exports = mongoose.model("BasketItem", BasketItem);
