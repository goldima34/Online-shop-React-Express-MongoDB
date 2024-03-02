import item from "../models/Item.js";

class ItemController {
  async create(req, res) {
    const { name, type, brand, price, color, size, availability } = req.body;
    const { img } = req.file;
    console.log(req.file);
  }
}

export default new ItemController();
