import { Router } from "express";
import BasketController from "../controllers/BasketController.js";

const router = new Router();

router.post("/", BasketController.create);
router.post("/:id", BasketController.addItemToBasket);

export default router;
