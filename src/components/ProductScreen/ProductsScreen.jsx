import React from 'react';
import './ProductsScreen.css'; // Create this CSS file for styling
import backgroundImage from '../../assets/products-bg.jpg'; // Import your background image

const ProductsScreen = () => {
  return (
    <div className="products-screen-container">
    
    
      <div className={"products-screen"} style={{ backgroundImage: `url(${backgroundImage})` }}>
      
        <div className="products-content">
          <h2>Smarter Machines. Better Snacks.</h2>
          <p>
            Discover the power behind every Go-Grab machine – from seamless features and smart
            payments to a curated lineup of snacks your customers love.
          </p>
        </div>
      </div>
      <div className="product-features">
        <h3>Smarter Tech. Simpler Snacking.</h3>
        <p>Built for modern lifestyles, Go-Grab machines are a fusion of technology, convenience, and innovation. From campuses to offices, we deliver seamless snacking.</p>
        <div className="features-grid">
          <div className="feature">
            <h4>Touchscreen Interaction</h4>
            <p>Browse, select, and pay – all through a vibrant 32” interface. Designed to be fast, friendly, and frustration-free.</p>
          </div>
          <div className="feature">
            <h4>Real-Time Inventory Tracking</h4>
            <p>Never go out of stock. Machines sync inventory live, with alerts for low stock, slot errors, and unusual patterns.</p>
          </div>
          <div className="feature">
            <h4>Dynamic Product Recommendations</h4>
            <p>Showcase combo offers or high-selling items right on the screen – smart suggestions tailored to user behavior.</p>
          </div>
          <div className="feature">
            <h4>Ad Space & Custom Branding</h4>
            <p>Use idle screens for video ads, product highlights, or brand campaigns – turning every machine into a smart billboard.</p>
          </div>
        </div>
      </div>
      <div className="cta-section">
        <h3>Want a Smarter Way to Sell or Snack?</h3>
        <p>Join hundreds of businesses and campuses already using Go-Grab to deliver fast, contactless convenience every day.</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default ProductsScreen;
