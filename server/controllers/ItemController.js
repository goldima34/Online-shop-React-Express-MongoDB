const { model } = require("mongoose");
const itemService = require("../Services/ItemService.js");
const ItemModel = require("../models/ItemModel.js");

class ItemController {
  async create(req, res) {
    try {
      const item = itemService.create(req.body, req.files);
      return res.json(item);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getAll(req, res) {
    try {
      let { limit, page } = req.query;

      page = page || 1;
      limit = limit || 5;
      let offset = page * limit - limit;
      const allItems = await ItemModel.find();
      const totalCount = allItems.length;
      const items = await ItemModel.find().limit(limit).skip(offset);
      return res.json({ items, totalCount });
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getOne(req, res) {
    const { id } = req.params;
    const item = await Device.findOne({ where: { id } });
    return res.json(item);
  }
}

module.exports = new ItemController();
