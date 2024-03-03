import itemService from "../Services/ItemService.js";

class ItemController {
  async create(req, res) {
    try {
      const item = itemService.create(req.body, req.files);
      return res.json(item);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new ItemController();
