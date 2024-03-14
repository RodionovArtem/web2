const mongoose = require("mongoose");

const Message = mongoose.model("Message", new mongoose.Schema({
    author: String,
    content: String,
    viewers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
}))

module.exports = Message;