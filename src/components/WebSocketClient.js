// src/components/WebSocketClient.js

import React, { useEffect, useState } from 'react';

const WebSocketClient = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:3000');

        socket.onopen = () => {
            console.log('WebSocket Client Connected');
            socket.send('Hello Server!'); // Sending a message to the server
        };

        socket.onmessage = (event) => {
            console.log('Message from server:', event.data);
            setMessages((prevMessages) => [...prevMessages, event.data]);
        };

        socket.onclose = () => {
            console.log('WebSocket Client Disconnected');
        };

        return () => {
            socket.close();
        };
    }, []);

    return (
        <div>
            <h2>WebSocket Messages</h2>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
        </div>
    );
};

export default WebSocketClient;
