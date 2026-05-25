# Chat Frontend (React)

## Overview

This is the frontend for the Real-time Chat Application using WebSocket and Dialogflow ES. It connects to the backend WebSocket server and provides a simple chat interface.

## Setup Instructions

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. The app will run on http://localhost:3000 by default.

## Features

- Real-time chat with backend via WebSocket
- Displays chat history
- Handles connection errors

## Project Structure

- `src/components/Chat.js` - Main chat UI and WebSocket logic
- `src/App.js` - App entry point
- `src/index.js` - React entry point

## Notes

- Ensure the backend server is running before starting the frontend.
- Update the WebSocket URL in `Chat.js` if your backend runs on a different host/port.
