import React from 'react';
import './HeroSection.css';
import heroImage from '../../../assets/heroImage.png'; // Import your image

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>From Cravings to <span className="highlight">Convenience</span></h1>
        <p>Just Go & Grab</p>
        <p className="description">
          Experience the future of snacking – fast, contactless, and always available.
          From campuses to co-working spaces, Go-Grab machines are built to serve smarter.
        </p>
        <div className="buttons">
          <button className="buy-button">Buy Machine</button>
          <button className="partner-button2">Partner With Us</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Go Grab Machine" />
      </div>
    </div>
  );
};

export default HeroSection;
