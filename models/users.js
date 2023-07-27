const { Schema, model } = require("mongoose");

const userSchema = new Schema({ name: String, role: String });

const User = model("user", userSchema);

module.exports = User;
