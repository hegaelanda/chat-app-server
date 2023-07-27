const User = require("../models/users");

module.exports = {
  getUsers: async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
};
