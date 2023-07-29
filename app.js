const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const open_connection = require("./config/connection");
const { Server } = require("socket.io");
const http = require("http");
const app = express();
const port = 9000;

open_connection; // create connection to mongodb
app.use(cors());
app.use(express.json());
app.use(routes);

let count = 0;

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`user connected with id ${socket.id}`);

  socket.on("join_room", (data) => {
    console.log("join rommmm");
    console.log(data);
    socket.join("chat-1");
  });

  socket.emit("receive_message", {
    message: `Hararaling`,
  });

  socket.on("increment", (counter) => {
    console.log("counter clicked, ", counter.counter);
    socket.emit("receive_counter", { number: counter.counter + 1 });
  });
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
