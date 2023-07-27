const express = require("express");
const cors = require("cors");
const app = express();
const port = 9000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!", 200);
});

app.get("/user", (req, res) => {
  res.send({ data: "Connected to express user" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
