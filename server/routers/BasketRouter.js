const { Router } = require("express");
const BasketController = require("../controllers/BasketController.js");

const router = new Router();

router.post("/", BasketController.create);
router.post("/:id", BasketController.addItemToBasket);
router.get("/:id", BasketController.getBasket);

module.exports = router;
