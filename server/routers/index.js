const { Router } = require("express");
const postRouter = require("./PostRouter.js");
const basketRouter = require("./BasketRouter.js");
const itemRouter = require("./ItemRouter.js");
const userRouter = require("./UserRouter.js");

const router = new Router();

router.use("/product", itemRouter);
router.use("/posts", postRouter);
router.use("/basket", basketRouter);
router.use("/user", userRouter);

module.exports = router;
