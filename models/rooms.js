const { Schema, model } = require("mongoose");

const roomSchema = new Schema({ psikolog: { type: Schema.ObjectId }, pasien: { type: Schema.ObjectId } });

const Room = model("room", roomSchema);

module.exports = Room;
