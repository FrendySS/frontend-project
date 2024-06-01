import React from 'react';
import '../style/navigation.css';
import logo from '../image/logo.png';
import { Link } from 'react-router-dom';


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
                    <li className="active"><Link to="/HomePage">HOME</Link></li>
                    <li className="active"><Link to="/Catalog">CATALOG</Link></li>
                    <li className="active"><Link to="/AboutUs">ABOUT US</Link></li>
                    <li className="active"><Link to="/contactPage">CONTACT</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;