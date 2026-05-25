import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";

const WS_URL = "ws://localhost:8000"; // Update if backend runs elsewhere

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new window.WebSocket(WS_URL);
    ws.current.onopen = () => setError(null);
    ws.current.onerror = () => setError("WebSocket connection error");
    ws.current.onclose = () => setError("WebSocket closed");
    ws.current.onmessage = (event) => {
      setMessages((prev) => [...prev, { from: "bot", text: event.data }]);
    };
    return () => ws.current && ws.current.close();
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim() || !ws.current || ws.current.readyState !== 1) return;
    ws.current.send(input);
    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setInput("");
  };

  return (
    <div className="chat-container">
      <h2>Chat with Bot</h2>
      <div className="chat-history">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={msg.from === "user" ? "user-msg" : "bot-msg"}
          >
            <b>{msg.from === "user" ? "You" : "Bot"}:</b> {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="chat-form">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          autoFocus
        />
        <button type="submit">Send</button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default Chat;
