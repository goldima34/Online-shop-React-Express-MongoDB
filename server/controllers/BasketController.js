const Basket = require("../models/BasketModel.js");
const BasketItem = require("../models/BasketItem.js");
const ItemModel = require("../models/ItemModel.js");
const mongoose = require("mongoose");

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
    try {
      const { id } = req.params;
      const basket = await Basket.find({ userId: id });
      return res.json({
        basket: basket[0],
        count: basket[0].basketItem.length,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async deleteOne(req, res) {
    try {
      const itemId = req.params.itemId;
      if (!req.params.id) {
        throw new Error("unknown id basket");
      }

      const basket = await Basket.find({ userId: req.params.id });
      if (!basket) {
        throw new Error("Basket not found");
      }
      const item = await ItemModel.findById(itemId);
      const updatedBasket = await Basket.findOneAndUpdate(
        { userId: req.params.id },
        { $pull: { basketItem: { item: item } } },
        { new: true }
      );
      // console.log("Updated basket:", updatedBasket);

      res.status(200).json(updatedBasket);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error deleting item from basket" });
    }
  }

  async decreaseCount(req, res) {
    try {
      const itemId = req.params.itemId;
      if (!req.params.id) {
        throw new Error("unknown id basket");
      }

      const basket = await Basket.find({ userId: req.params.id });
      if (!basket) {
        throw new Error("Basket not found");
      }

      const item = await ItemModel.findById(itemId);
      console.log(itemId);
      const updatedBasket = await Basket.findOneAndUpdate(
        {
          userId: req.params.id,
          "basketItem._id": itemId, // Уточняем, что мы хотим обновить элемент с соответствующим _id
        },
        {
          $inc: { "basketItem.$.count": -1 }, // Увеличиваем count внутри найденного элемента на 1
        },
        { new: true }
      );
      console.log("Updated basket:", updatedBasket); //null

      res.status(200).json(updatedBasket);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error adding item to basket" });
    }
  }

  async increaseCount(req, res) {
    try {
      const itemId = req.params.itemId;
      if (!req.params.id) {
        throw new Error("unknown id basket");
      }

      const basket = await Basket.find({ userId: req.params.id });
      if (!basket) {
        throw new Error("Basket not found");
      }
      //       { $inc: { count: -1 } },
      const item = await ItemModel.findById(itemId);
      console.log(itemId)
      const updatedBasket = await Basket.findOneAndUpdate(
        {
          userId: req.params.id,
          "basketItem._id": itemId, // Уточняем, что мы хотим обновить элемент с соответствующим _id
        },
        {
          $inc: { "basketItem.$.count": 1 }, // Увеличиваем count внутри найденного элемента на 1
        },
        { new: true }
      );
      //console.log("Updated basket:", updatedBasket); //null

      res.status(200).json(updatedBasket);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error adding item to basket" });
    }
  }

  async addItemToBasket(req, res) {
    try {
      const { itemId, amount } = req.body;
      // console.log(req)
      if (!req.params.id) {
        throw new Error("unknown id basket");
      }

      const basket = await Basket.find({ userId: req.params.id });
      // console.log("Basket found:", basket);
      if (!basket) {
        throw new Error("Basket not found");
      }
      const item = await ItemModel.findById(itemId);
      const basketItem = await BasketItem.create({
        item: item,
        count: amount,
      });

      const updatedBasket = await Basket.findOneAndUpdate(
        { userId: req.params.id },
        { $push: { basketItem: basketItem.toObject() } },
        { new: true }
      );
      res.status(200).json(updatedBasket);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error adding item to basket" });
    }
  }
}

module.exports = new BasketController();
