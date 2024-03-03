const Basket = require("../models/BasketModel.js");
const BasketItem = require("../models/ItemModel.js");

class BasketController {
  async create(req, res) {
    try {
      const { userId, totalPrice } = req.body;
      const basket = await Basket.create({
        userId: userId,
        totalPrice: totalPrice,
      });
      return res.json(basket);
    } catch (e) {
      console.log("Basket controller create | " + e.message);
    }
  }

  async addItemToBasket(req, res) {
    try {
      const { itemId, amount } = req.body;
      if (!req.body._id) {
        throw new Error("unknown id basket");
      }
      const basket = await Basket.findById(req.body._id);
      if (!basket) {
        throw new Error("Basket not found");
      }
      const item = await BasketItem.create({ itemId: itemId, amount: amount });
      if (!basket.basketItem) {
        basket.basketItem = [];
      }
      const updatedBasket = await Basket.findByIdAndUpdate(
        req.body._id,
        {
          $push: {
            basketItem: item,
          },
        },
        {
          new: true,
        }
      );
      return res.json(updatedBasket);
    } catch (e) {
      console.log("Basket controller addItemToBasket | " + e);
    }
  }
}

module.exports = new BasketController();
