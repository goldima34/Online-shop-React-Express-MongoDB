import { Router } from "express";
import postRouter from "./PostRouter.js"
import basketRouter from './BasketRouter.js'

const router = new Router()

router.use('/posts', postRouter)
router.use('/basket', basketRouter)

export default router;