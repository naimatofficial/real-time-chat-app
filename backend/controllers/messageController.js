const Message = require("../models/messageModel");

// In-memory storage for simplicity
const messages = [];

const getMessages = (req, res) => {
	res.json(messages);
};

const postMessage = (req, res) => {
	const { user, content } = req.body;
	const message = new Message(messages.length + 1, user, content, new Date());
	messages.push(message);
	res.status(201).json(message);
};

module.exports = { getMessages, postMessage };
