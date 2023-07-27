const { Schema, model } = require("mongoose");

const chatSchema = new Schema({ name: String, role: String });

const Chat = model("chat", chatSchema);

module.exports = Chat;
