const { Router } = require("express");
const BasketController = require("../controllers/BasketController.js");

const router = new Router();

router.post("/", BasketController.create);
router.post("/:id", BasketController.addItemToBasket);

module.exports = router;
