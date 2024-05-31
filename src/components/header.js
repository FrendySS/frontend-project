import React from 'react';
import '../style/navigation.css';
import logo from '../image/logo.png';

function  Header(){
    return(
        <div className="maincontainer">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand logo" href="/HomePage">
                            <img src={logo} alt="logo"/>
                        </a>
                    </div>
                </div>
            <div className="collapse navbar-collapse" id="upmenu">
                    <ul className="nav navbar-nav" id="navbarontop">
                        <li className="active"><a href="/HomePage">HOME</a></li>
                        <li className="active"><a href="/Catalog">CATALOG</a></li>
                        <li className="active"><a href="/AboutUs">ABOUT US</a></li>
                        <li><a href="/ContactPage">CONTACT</a></li>
                    </ul>
                </div>
        </div>
    );
}

export default Header;