import './App.css';
import './style/mystyle.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import HomePage from './components/homePage.js';
import ContactPage from './components/contactPage.js';
import CatalogPage from './components/catalog.js';
import AboutUsPage from "./components/aboutUs.js";
import { Route, Routes } from 'react-router-dom';

const App = () => (
    <div className="body">
        <div className="navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Header />
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </div>
        <div className="main">

        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>
);

export default App;