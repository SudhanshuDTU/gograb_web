import React from 'react';
import './FooterBanner.css'; 
import backgroundImage from '../../../assets/footer.png'; 

const FooterBanner = () => {
  return (
    <div className="footer-banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Wrapped text content in a new div for better alignment control */}
      <div className="banner-content">
        <div className="banner-text">
          
          <h2>Smart Vending That Feeds Moments, Not Just Hunger</h2>
         
          <p>
            At Go-Grab, vending is more than just quick convenience – it's a catalyst for connection.
            Whether it's a bite between meetings or a shared moment with a friend, our machines bring people together, effortlessly.
          </p>
        </div>
        
        <div className="banner-buttons">
          <button className="collab-button">Collab With Us</button>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
    </div>

    
  );
};

export default FooterBanner;
