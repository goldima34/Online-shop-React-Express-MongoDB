const itemService = require('../Services/ItemService.js')
const ItemModel = require('../models/ItemModel.js')

class ItemController {
  async create (req, res) {
    try {
      const item = await itemService.create(req.body, req.files)
      return res.json(item)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }

  async getAll (req, res) {
    try {
      let { limit, page } = req.query

      page = page || 1
      limit = limit || 100
      const offset = page * limit - limit
      const allItems = await ItemModel.find()
      const totalCount = allItems.length
      const items = await ItemModel.find().limit(limit).skip(offset)
      return res.json({ items, totalCount })
    } catch (e) {
      res.status(500).json(e.message)
    }
  }

  async getOne (req, res) {
    try {
      const { id } = req.params
      const item = await ItemModel.findById(id)
      return res.json(item)
    } catch (error) {
      res.status(500).json(error.message)
      console.log(error)
    }
  }

  async getByCategory (req, res) {
    try {
      let { limit, page } = req.query
      page = page || 1
      limit = limit || 100
      const offset = page * limit - limit
      const { category } = req.params
      const allItems = await ItemModel.find({ category: category })
      const totalCount = allItems.length
      const items = await ItemModel.find().limit(limit).skip(offset)
      return res.json({ items, totalCount })
    } catch (error) {
      // res.status(500).json(error.message)
    }
  }
}

module.exports = new ItemController()
