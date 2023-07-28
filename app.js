const express = require("express");
const cors = require("cors");
const app = express();
const port = 9000;
const routes = require("./routes");
const open_connection = require("./config/connection");

open_connection; // create connection to mongodb
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
