const itemModel = require('../models/ItemModel.js')
const fileServise = require('./fileService.js')

class ItemService {
  async create(params, imgs) {
    try {
      const { name, type, category, brand, price, color, size, availability } =
        params
      const { img } = imgs
      const file = fileServise.saveFile(img)
      const item = itemModel.create({
        name: name,
        type: type,
        brand: brand,
        category: category,
        price: price,
        color: color,
        size: size,
        availability: availability,
        img: file,
      })
      return item
    } catch (error) {
      console.log(error)
    }
  }

  async getAll() {
    const items = itemModel.find()
    return items
  }
}

module.exports = new ItemService()
