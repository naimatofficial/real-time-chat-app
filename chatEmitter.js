const EventEmitter = require("events");

class ChatEmitter extends EventEmitter {}

const chatEmitter = new ChatEmitter();

module.exports = chatEmitter;
