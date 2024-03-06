const { model } = require("mongoose");
const itemService = require("../Services/ItemService.js");

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
      const items = itemService.getAll();
      return res.json(items);
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
