import React, { useState } from 'react';
import './App.css';
import { Route, Routes, } from 'react-router-dom';
import Header from "./components/header";
import HomePage from "./components/homePage";
import CatalogPage from "./components/catalog";
import AboutUs from "./components/aboutUs";
import ContactPage from "./components/contactPage";
import Footer from "./components/footer";
import CarInfoPage from "./components/сarInfoPage";
import SummaryPage from "./components/summaryPage";

function App() {
    const [contactData, setContactData] = useState({});
    return (
        <>
            <div className="Header">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Header />
                    </nav>
            </div>
            <Routes>
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/contactpage" element={<ContactPage setContactData={setContactData} />} />
                <Route path="/summary" element={<SummaryPage contactData={contactData} />} />
                <Route path="/carinfopage/:id" element={<CarInfoPage />} />
            </Routes>
            <div className="HomePage">
            </div>
            <div className="Footer">
                <Footer />
            </div>
        </>
    );
}

export default App;