const express = require("express");
const cors = require("cors");
const app = express();
const port = 9000;
const routes = require("./routes");
const conn = require("./config/connection");

// check db
conn;
app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
