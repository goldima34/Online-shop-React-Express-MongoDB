const { Router } = require("express");
const ItemController = require("../controllers/ItemController.js");

const router = new Router();

router.post("/", ItemController.create);
router.get("/", ItemController.getAll);
router.get("/:id", ItemController.getOne);
module.exports = router;
