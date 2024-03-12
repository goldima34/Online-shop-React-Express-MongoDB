const categoryModel = require('../models/CategoryModel')

class CategoryService {
  async create(req, res) {
    try {
      const item = categoryModel.create(req.body, req.files);
      return res.json(item);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getAll(req, res) {
    try {
      let { limit, page } = req.query;

      page = page || 1;
      limit = limit || 100;
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
    try {
      const { id } = req.params;
      const item = await ItemModel.findById(id);
      return res.json(item);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = new CategoryService();