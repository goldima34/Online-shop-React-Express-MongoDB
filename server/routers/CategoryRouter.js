const { Router } = require("express");
const CategoryController = require("../controllers/CategoryController");

const router = new Router();

router.post("/", CategoryController.create);
router.get("/", CategoryController.getAllWithPagination);
router.get('/all', CategoryController.getAll)
router.get("/:name", CategoryController.getOne);

module.exports = router;

