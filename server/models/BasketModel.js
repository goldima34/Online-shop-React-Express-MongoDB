const mongoose = require("mongoose");
const BasketItem = require("./ItemModel.js");

const Basket = new mongoose.Schema({
  userId: { type: String, required: true },
  basketItem: {
    type: [BasketItem.schema],
    required: false,
    unique: false,
    index: false,
    default: [],
  },
  totalPrice: {
    type: Number,
    required: false,
    unique: false,
    index: false,
    default: 0,
  },
});

module.exports = mongoose.model("Basket", Basket);
