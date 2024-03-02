import { Router } from "express";
import PostController from "../controllers/PostController.js";

const router = new Router()

router.post('/', PostController.create)
router.get('/', PostController.getAll)
router.get('/:id', PostController.getOne)
router.put('/', PostController.update)
router.delete('/:id', PostController.delete)

export default router