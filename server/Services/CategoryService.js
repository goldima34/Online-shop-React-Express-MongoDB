const categoryModel = require("../models/CategoryModel");
const fileServise = require("./fileService.js");

class CategoryService {
  async create(params, imgs) {
      const { name } = params;
      const { img } = imgs;
      const photo = fileServise.saveFile(img);
      const category = await categoryModel.create({ name: name, img: photo });
      return category;
  }

  async getAll() {
      const categorys = await categoryModel.find();
      return categorys;
  }

  async getOne(req) {
      const { name } = req.params;
      console.log(name);
      const category = await categoryModel.find({ name: name });
      return category;
  }
}

module.exports = new CategoryService();
