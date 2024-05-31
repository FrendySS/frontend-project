import React from "react";
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/header.js";
import Footer from './components/footer.js';
import AboutUs from "./components/aboutUs.js";
import Catalog from "./components/catalog.js";
import ContactPage from "./components/contactPage.js";
import HomePage from "./components/homePage.js";
import CarInfoPage from "./components/carInfoPage";

function App() {
    return (
        <Router>
        <div className="Header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Header />
                </nav>
        </div>
        <div className="HomePage">
            <Routes>
                <Route path="/HomePage" exact component={HomePage} />
                <Route path="/AboutUs" component={AboutUs} />
                <Route path="/ContactPage" component={ContactPage} />
                <Route path="/Catalog" component={Catalog} />
            </Routes>
        </div>
        <div className="Footer">
            <CarInfoPage/>
        </div>
        </Router>
    );
}

export default App;