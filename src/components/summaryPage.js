import React, { useEffect, useState } from 'react';
import '../style/SummaryPage.css';

function SummaryPage() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Load messages from localStorage
        const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
        setMessages(savedMessages);
    }, []);

    return (
        <div className="summary-container">
            <h2>Summary</h2>
            {messages.map((msg, index) => (
                <div key={index} className="message">
                    <p><strong>Name:</strong> {msg.name}</p>
                    <p><strong>Email:</strong> {msg.email}</p>
                    <p><strong>Phone:</strong> {msg.phone}</p>
                    <p><strong>Message:</strong> {msg.message}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default SummaryPage;