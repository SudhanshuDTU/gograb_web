import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import navLogo from "./assets/navLogo.png";
import HeroSection from "./components/HomeScreen/HeroSection/HeroSection";
import HowItWorks from "./components/HomeScreen/HowItWorks/HowItWorks";
import TrustedByUsers from "./components/HomeScreen/TrustedByUsers/TrustedByUsers";
import EmpoweringCampuses from "./components/HomeScreen/EmpoweringCampuses/EmpoweringCampuses";
import WhyGoGrab from "./components/HomeScreen/WhyGoGrab/WhyGoGrab";
import CampusFeedback from "./components/HomeScreen/CampusFeedback/CampusFeedback";
import BlogSection from "./components/HomeScreen/BlogSection/BlogSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FAQSection from "./components/HomeScreen/FAQSection/FAQSection";
import FooterBanner from "./components/HomeScreen/FooterBanner/FooterBanner.jsx";
import { useNavigate } from "react-router-dom";
import ProductsScreen from "../src/components/ProductScreen/ProductsScreen.jsx";
import Collaborations from "./components/CollaborationScreen/Collaborations";
import BlogScreen from "./components/BlogScreen/BlogScreen";
import ContactScreen from "./components/ContactScreen/ContactScreen";
import Footer from "./components/HomeScreen/Footer/footer";
import BlogDetail from "./components/BlogScreen/BlogDetail";
import { toast,ToastContainer } from "react-toastify";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [alert,setAlert] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close the menu after navigation
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="logo">
            <img
              onClick={() => navigateTo("/")}
              src={navLogo}
              alt="Company Logo"
            />
          </div>

          <button className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? "✕" : "☰"}
          </button>

          <div className={`nav-container ${isMenuOpen ? "active" : ""}`}>
            <ul className="nav-links">
              <li>
                <a onClick={() => navigateTo("/")}>Home</a>
              </li>
              <li>
                <a onClick={()=> toast("Coming Soon..")}>Products</a>
              </li>
              <li>
                <a onClick={() => toast("Coming Soon ..")}>
                  Collaborations
                </a>
              </li>
              <li>
                <a onClick={() => navigateTo("/blog")}>Blog</a>
              </li>
              <li>
                <a onClick={() => navigateTo("/contact")}>Contact</a>
              </li>
            </ul>
            <div className="partner-button">
              <a href="/partner" className="button">
                Partner With Us
              </a>
            </div>
          </div>
        </nav>
        <ToastContainer/>
      
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <HowItWorks />
              <TrustedByUsers />
              <EmpoweringCampuses />
              <WhyGoGrab />
              <CampusFeedback />
              <BlogSection />
              <FAQSection />
              <FooterBanner />
              <Footer />
            </>
          }
        />
        <Route path="/products" element={<ProductsScreen />} />
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/blog" element={<BlogScreen />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>
    </div>
  );
}

export default App;
