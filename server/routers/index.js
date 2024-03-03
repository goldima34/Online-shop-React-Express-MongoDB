import { Router } from "express";
import postRouter from "./PostRouter.js"
import basketRouter from './BasketRouter.js'
import itemRouter from "./ItemRouter.js";
import userRouter from "./UserRouter.js";

const router = new Router();

router.use("/product", itemRouter);
router.use("/posts", postRouter);
router.use("/basket", basketRouter);
router.use("/user", userRouter);

export default router;