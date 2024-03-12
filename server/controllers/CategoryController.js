const CategoryService = require("../Services/CategoryService");
const categoryModel = require("../models/CategoryModel");
class CategoryController {
  async create(req, res) {
    try {
      const category = await CategoryService.create(req.body, req.files);
      return res.json(category);
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
    const allItems = await categoryModel.find();
    const totalCount = allItems.length;
    const category = await categoryModel.find().limit(limit).skip(offset);
    return res.json({ category, totalCount });
   } catch (e) {
     res.status(500).json(e.message);
   }
  }

  async getOne(req, res) {
    try {
      const category = await CategoryService.getOne(req);
      return res.json(category);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

module.exports = new CategoryController();
