const mongoose = require("mongoose");

const conn = mongoose.connect("mongodb+srv://hegacendikia:VtYb7HpV3eFMd8Xm@cluster0.jndnlo1.mongodb.net/chatapp");

module.exports = conn;
