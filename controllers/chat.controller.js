const Chat = require("../models/chats");

module.exports = {
  getChats: async (req, res) => {
    try {
      const chat = await Chat.find();
      res.status(200).send(chat);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
};
