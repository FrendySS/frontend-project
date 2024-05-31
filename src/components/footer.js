import React from 'react';
import "../style/footer.css";
import newsimage from '../image/patrik-storm-alstra-pictures-5RSqU21ia7Q-unsplash.jpg';
import border from "../image/border.png";


function Footer (){
    return(
    <div id="Footer">
        <footer className="footer">
            <div className="newslettercontent">
                <div className="leftside">
                    <img src={border} alt="border"/>
                    <h1>NEWSLETTER</h1>
                    <p>Subscribe to the COLLECTIONCARS mailing list to <br/>
                        receive updates on new arrivals, special offers <br/>
                        and other discount information.</p>
                </div>
                <div className="rightside">
                    <img src={newsimage} alt="newsletter"/>
                    <input type="text" className="form-control" id="subemail" placeholder="EMAIL"/>
                    <button>SUBSCRIBE</button>
                </div>
            </div>
            <div className="confoot">
                <div className="rowfoot">
                    <div className="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">privacy policy</a></li>
                            <li><a href="#">affiliate program</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">shipping</a></li>
                            <li><a href="#">order status</a></li>
                            <li><a href="#">payment options</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>sources</h4>
                        <ul>
                            <li><a href="https://unsplash.com/s/photos/jdm-cars">images</a></li>
                            <li><a href="https://en.wikipedia.org/wiki/Japanese_domestic_market">descriptions</a></li>
                            <li><a href="#">prices</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>social media</h4>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    );
}

export default Footer;