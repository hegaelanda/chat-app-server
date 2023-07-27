const express = require("express");
const router = express.Router();

const { getChats } = require("../controllers/chat.controller");

router.get("/get_all", getChats);

router.get("/", (req, res) => {
  res.status(200).send("Connected to chat");
});

module.exports = router;
