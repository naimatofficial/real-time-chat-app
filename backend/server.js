const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const messageRoutes = require("./routes/messageRoutes");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
	cors: {
		origin: "*",
	},
});

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use("/api", messageRoutes);

io.on("connection", (socket) => {
	console.log(`New connection: ${socket.id}`);

	socket.on("sendMessage", (message) => {
		io.emit("receiveMessage", message);
	});

	socket.on("disconnect", () => {
		console.log(`Disconnected: ${socket.id}`);
	});
});

app.get("/", (req, res) => {
	res.send("Chat App Backend");
});

server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
