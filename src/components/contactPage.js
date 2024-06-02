import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/cons.css';

function ContactPage({ setContactData }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Load data from localStorage
        const savedName = localStorage.getItem('name');
        const savedEmail = localStorage.getItem('email');
        const savedPhone = localStorage.getItem('phone');
        const savedMessage = localStorage.getItem('message');

        if (savedName) setName(savedName);
        if (savedEmail) setEmail(savedEmail);
        if (savedPhone) setPhone(savedPhone);
        if (savedMessage) setMessage(savedMessage);
    }, []);

    const handleSubmit = () => {
        const newContact = { name, email, phone, message };
        setContactData(newContact);

        // Retrieve existing messages
        const existingMessages = JSON.parse(localStorage.getItem('messages')) || [];

        // Append the new message
        const updatedMessages = [...existingMessages, newContact];

        // Save updated messages array to localStorage
        localStorage.setItem('messages', JSON.stringify(updatedMessages));

        navigate('/summary');
    };

    return (
        <div className="container1">
            <div className="contact-box">
                <div className="left"></div>
                <div className="right">
                    <h2 className="h2">Contact Us</h2>
                    <input
                        type="text"
                        className="field"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        className="field"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        className="field"
                        placeholder="Your Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <textarea
                        className="field area"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button className="bttn" onClick={handleSubmit}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
