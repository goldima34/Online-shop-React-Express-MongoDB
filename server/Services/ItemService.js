const itemModel = require("../models/ItemModel.js");
const fileServise = require("./fileService.js");

class ItemService {
  async create(params, imgs) {
    const { name, type, category, brand, price, color, size, availability } =
      params;
    const { img } = imgs;
    const files = [];
    img.forEach((element) => {
      files.push(fileServise.saveFile(element));
    });
    const item = itemModel.create({
      name: name,
      type: type,
      brand: brand,
      category: category,
      price: price,
      color: color,
      size: size,
      availability: availability,
      img: files,
    });
    return item;
  }

  async getAll() {
    const items = itemModel.find();
    return items;
  }
}

module.exports = new ItemService();
