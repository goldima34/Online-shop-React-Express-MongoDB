import mongoose from "mongoose";
import BasketItem from "./Item.js";

const Basket = new mongoose.Schema({
    userId: {type: String, required: true},
    basketItem: {type: [BasketItem.schema], required: false, unique: false, index: false, default: []},
    totalPrice: {type: Number, required: false, unique: false, index: false, default: 0}
})

export default mongoose.model('Basket', Basket)