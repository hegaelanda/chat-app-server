const { Schema, model } = require("mongoose");

const messageSchema = new Schema({ message: String, sender: String, room: String, timestamp: String });

const message = model("message", messageSchema);

module.exports = message;
