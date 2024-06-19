const chatEmitter = require("./chatEmitter");

chatEmitter.on("message", (message) => {
	console.log(`New message: ${message}`);
	// Additional logic to handle new messages
});

chatEmitter.on("userJoined", (username) => {
	console.log(`${username} joined the chat`);
	// Additional logic to handle user joining
});

chatEmitter.on("userLeft", (username) => {
	console.log(`${username} left the chat`);
	// Additional logic to handle user leaving
});
