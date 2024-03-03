const itemModel = require("../models/ItemModel.js");
const fileService = require("./fileService.js");

class ItemService {
  async create(params, imgs) {
    const { name, type, brand, price, color, size, availability } = params;
    const { img } = imgs;
    const files = [];
    img.forEach((element) => {
      files.push(fileService.saveFile(element));
    });
    const item = itemModel.create({
      name: name,
      type: type,
      brand: brand,
      price: price,
      color: color,
      size: size,
      availability: availability,
      img: files,
    });
    return item;
  }
}

module.exports = new ItemService();
