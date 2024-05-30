import React from 'react';
import { Link } from 'react-router-dom';
import '../style/mystyle.css';

const Header = () => {
    return (
        <div className="allcontain">
            <nav className="topnavbar navbar-default topnav">
                <div className="container">
                    <div className="navbar-header">
                        <div className="navbar-brand logo">
                            <img src="../image/logo.png" alt="logo" />
                        </div>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="upmenu">
                    <ul className="nav navbar-nav" id="navbarontop">
                        <li className="active"><Link to="/">HOME</Link></li>
                        <li className="dropdown">
                            <Link to="/catalog" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">CATALOG</Link>
                        </li>
                        <li className="dropdown">
                            <Link to="/about" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">ABOUT US</Link>
                        </li>
                        <li>
                            <Link to="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;