import React from 'react';
import '../style/cons.css'
const ContactPage = () => {
    return(
        <div class="container1">
            <div class="contact-box">
                <div class="left"></div>
                <div class="right">
                    <h2 class="h2">Contact Us</h2>
                    <input type="text" class="field" placeholder="Your Name" />
                    <input type="text" class="field" placeholder="Your Email" />
                    <input type="text" class="field" placeholder="Your Phone" />
                    <textarea class="field area" placeholder="Message"></textarea>
                    <button class="bttn" href="index.html">Send</button>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;