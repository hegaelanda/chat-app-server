const response = require("../utils/response");
const validate = require("validate.js");
const Chat = require("../models/chats");
const Message = require("../models/messages");
const Room = require("../models/rooms");
const User = require("../models/users");

function validateRoom(room) {
  const constraints = {
    psikolog: {
      presence: true,
      type: "string",
    },
    pasien: {
      presence: true,
      type: "string",
    },
  };
  return validate(room, constraints);
}

module.exports = {
  // newChat: async (req, res) => {
  //   try {
  //     let error = validateRoom(req.body);
  //     // check request
  //     if (error) {
  //       response(res, 400, "bad request", error);
  //       return;
  //     }
  //     const room = new Room({ psikolog: req.body.psikolog, pasien: req.body.pasien });
  //     await room.save();
  //     response(res, 200, "success", req.body);
  //   } catch (error) {
  //     response(res, 500, "failed", error.message);
  //   }
  // },
  newChat: async (req, res) => {
    try {
      let error = validateRoom(req.body);
      // check request
      if (error) {
        response(res, 400, "bad request", error);
        return;
      }
      const psikolog = await User.findOne({ name: req.body.psikolog });
      const pasien = await User.findOne({ name: req.body.pasien });
      console.log({ psikolog: psikolog._id, pasien: pasien._id });
      const room = new Room({ psikolog: psikolog._id, pasien: pasien._id });
      await room.save();
      response(res, 200, "success", room);
    } catch (error) {
      response(res, 500, "failed", error.message);
    }
  },
  getRooms: async (req, res) => {
    try {
      const room = await Room.find({});
      response(res, 200, "success", room);
    } catch (error) {
      response(res, 500, "failed", error.message);
    }
  },
  getChats: async (req, res) => {
    try {
      const chat = await Chat.find();
      res.status(200).send(chat);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
};
