const Basket = require("../models/BasketModel.js");
const BasketItem = require("../models/BasketItem.js");
const ItemModel = require("../models/ItemModel.js");

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

  async getBasket(req, res) {
    const {id} = req.params
    const basket = await Basket.find({ userId: id });
    console.log(basket[0].basketItem.length);
    return res.json({
      basket : basket[0],
      count : basket[0].basketItem.length,
    })
  }

  async addItemToBasket(req, res) {
    try {
      const { itemId, amount } = req.body;
      if (!req.params.id) {
        throw new Error("unknown id basket");
      }
      const basket = await Basket.find({ userId: req.params.id });
  
      if (!basket) {
        throw new Error("Basket not found");
      }
      const item = await ItemModel.findById(itemId);
      const basketItem = await BasketItem.create({item: item, count: amount})
      const updatedBasket = await Basket.findByIdAndUpdate(
        req.params.id,
        {
          $push: {
            basketItem: basketItem,
          },
        },
        {
          new: true, // Return the updated document
        }
      );
      res.status(200).json({
        message: "Item added to basket successfully",
        data: updatedBasket, // Send the updated basket data
      });
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Error adding item to basket" });
    }
  }
}

module.exports = new BasketController();
