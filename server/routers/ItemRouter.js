import { Router } from "express";
import ItemController from "../controllers/ItemController.js";

const router = new Router()

router.post("/", ItemController.create)

export default router
