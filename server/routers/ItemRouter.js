const { Router } = require("express");
const ItemController = require("../controllers/ItemController.js");

const router = new Router();

router.post("/", ItemController.create);
router.get("/", ItemController.getAll);

module.exports = router;
