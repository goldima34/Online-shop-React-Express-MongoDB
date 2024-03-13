const mongoose = require("mongoose");
const Item = require("./ItemModel.js");

const BasketItem = mongoose.Schema({
  item: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
  count: { type: Number, default: 1 },
});

module.exports = mongoose.model("BasketItem", BasketItem);
