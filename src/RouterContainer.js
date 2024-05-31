import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/homePage.js";
import Catalog from "./components/catalog.js";
import AboutUs from "./components/aboutUs.js";
import ContactPage from "./components/contactPage.js";

function RouterContainer() {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    );
}

export default RouterContainer;