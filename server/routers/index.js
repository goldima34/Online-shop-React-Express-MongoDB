const { Router } = require("express");
const postRouter = require("./PostRouter.js");
const basketRouter = require("./BasketRouter.js");
const itemRouter = require("./ItemRouter.js");
const userRouter = require("./UserRouter.js");
const categoryRouter = require("./CategoryRouter.js")

const router = new Router();

router.use("/product", itemRouter);
router.use("/category", categoryRouter);
router.use("/posts", postRouter);
router.use("/basket", basketRouter);
router.use("/user", userRouter);

module.exports = router;
