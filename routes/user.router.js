const express = require("express");
const router = express.Router();

const { getUsers } = require("../controllers/user.controller");

router.get("/get_all", getUsers);

router.get("/", (req, res) => {
  res.status(200).send("Connected to user");
});

module.exports = router;
