import React from 'react';
import '../style/mystyle.css'

function Header(){
    return (
        <div class="allcontain">
            <nav class="topnavbar navbar-default topnav">
                <div class="container">
                    <div class="navbar-header">
                        <div class="navbar-brand logo" href="#">
                            <img src="image/logo.png" alt="logo" />
                        </div>
                    </div>
                </div>
                <div class="collapse navbar-collapse" id="upmenu">
                    <ul class="nav navbar-nav" id="navbarontop">
                        <li class="active"><a href="#">HOME</a> </li>
                        <li class="dropdown">
                            <a href="#Catalog" class="dropdown-toggle"	data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">CATALOG</a>
                        </li>
                        <li class="dropdown">
                            <a href="#Footer" class="dropdown-toggle"	data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">MORE INFO</a>
                        </li>
                        <li>
                            <a href="cons.html">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;