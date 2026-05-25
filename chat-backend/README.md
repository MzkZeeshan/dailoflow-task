# Real-time Chat Application

This project is a real-time chat application that integrates with Google Dialogflow ES for conversational AI capabilities. The application consists of a backend server built with Node.js and Express, which communicates with a WebSocket client for real-time messaging. The server processes messages from the client, sends them to Dialogflow ES, and relays the responses back to the client.

## Project Structure

```
chat-backend
├── src
│   ├── server.js          # Entry point of the backend application
│   ├── websocket.js       # WebSocket server implementation
│   ├── dialogflow.js      # Integration with Dialogflow ES
│   └── utils
│       └── errorHandler.js # Error handling utility
├── package.json           # npm configuration file
├── .env                   # Environment variables
└── README.md              # Project documentation
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd chat-backend
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your Dialogflow ES credentials and any other necessary configuration settings. Example:
   ```
   DIALOGFLOW_PROJECT_ID=your_project_id
   DIALOGFLOW_PRIVATE_KEY=your_private_key
   DIALOGFLOW_CLIENT_EMAIL=your_client_email
   ```

4. **Run the Server**
   Start the backend server using:
   ```bash
   node src/server.js
   ```

5. **Frontend Setup**
   Ensure you have a frontend application that connects to the WebSocket server. The frontend should be able to send and receive messages in real-time.

## Usage

Once the server is running, you can interact with the chat application through the frontend interface. Messages sent from the client will be processed by the backend, which communicates with Dialogflow ES to generate responses.

## Error Handling

The application includes error handling mechanisms to manage and log errors that may occur during WebSocket connections and API requests. This ensures a smoother user experience and easier debugging.

## Contribution

Feel free to contribute to this project by submitting issues or pull requests. For any questions or suggestions, please reach out.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.