const Basket = require("../models/BasketModel.js");
const BasketItem = require("../models/BasketItem.js");

class BasketController {
  async create(userId) {
    try {
      const basket = await Basket.create({
        userId,
        totalPrice: 0,
      });
      return basket;
    } catch (e) {
      console.log("Basket controller create | " + e.message);
    }
  }

  async getBasket(req, res) {}

  async addItemToBasket(req, res) {
    try {
      const { itemId, amount } = req.body;
      if (!req.params.id) {
        throw new Error("unknown id basket");
      }
      const basket = await Basket.findById(req.params.id);
      if (!basket) {
        throw new Error("Basket not found");
      }
      const item = await BasketItem.create({ itemId: itemId, amount: amount });
      if (!basket.basketItem) {
        basket.basketItem = [];
      }
      basket.basketItem.push(...[item]); // Avoid nested arrays

      const updatedBasket = await basket.save();
      return res.json(updatedBasket);
    } catch (e) {
      console.log("Basket controller addItemToBasket | " + e);
    }
  }
}

module.exports = new BasketController();
