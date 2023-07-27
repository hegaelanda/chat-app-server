const express = require("express");
const router = express.Router();
const userRouter = require("./user.router");
const chatRouter = require("./chat.router");

router.get("/", (req, res) => {
  res.status(200).send("Connected to express js");
});

router.use("/user", userRouter);
router.use("/chat", chatRouter);

module.exports = router;
