const WebSocket = require("ws");
const { sendMessageToDialogflow } = require("./dialogflow");
const errorHandler = require("./utils/errorHandler");

// const wss = new WebSocket.Server({ noServer: true });
function setupWebSocket(wss) {
  wss.on("connection", (ws) => {
    console.log("Client connected");

    ws.on("message", async (message) => {
      console.log(`Received message: ${message}`);
      try {
        const dialogflowResponse = await sendMessageToDialogflow(
          "12345678", // You can generate a unique session ID for each client if needed
          message
        );
        ws.send(
          JSON.stringify(dialogflowResponse.queryResult?.fulfillmentText || "")
        );
      } catch (error) {
        errorHandler(error);
        ws.send("Error processing your request. Please try again.");
      }
    });

    ws.on("close", () => {
      console.log("Client disconnected");
    });

    ws.on("error", (error) => {
      errorHandler(error);
    });
  });
}
module.exports = setupWebSocket;
