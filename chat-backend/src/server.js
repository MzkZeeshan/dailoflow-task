const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const { handleError } = require("./utils/errorHandler");
const setupWebSocket = require("./websocket");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Middleware to handle JSON requests
app.use(express.json());

// Set up WebSocket server
setupWebSocket(wss);

// Basic route for health check
app.get("/", (req, res) => {
  res.send("Chat backend is running!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  handleError(err, res);
});

// Start the server
const PORT = process.env.EXPRESS_PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
