import React from 'react';
import '../style/cons.css';

function ContactPage() {
    return(
        <div className="container1">
            <div className="contact-box">
                <div className="left"></div>
                <div className="right">
                    <h2 className="h2">Contact Us</h2>
                    <input type="text" className="field" placeholder="Your Name" />
                    <input type="text" className="field" placeholder="Your Email" />
                    <input type="text" className="field" placeholder="Your Phone" />
                    <textarea className="field area" placeholder="Message"></textarea>
                    <button className="bttn" href="/HomePage">Send</button>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;