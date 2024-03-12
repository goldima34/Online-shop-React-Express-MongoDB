const { Router } = require("express");
const CategoryController = require("../controllers/CategoryController");

const router = new Router();

router.post("/", CategoryController.create);
router.get("/", CategoryController.getAll);
router.get("/:name", CategoryController.getOne);

module.exports = router;

