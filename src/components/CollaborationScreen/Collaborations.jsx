import React from 'react';
import './Collaborations.css'; // We'll create this CSS file
import headerImage from '../../assets/products-bg.jpg';
import brandVisibilityImg from '../../assets/brandVisiblity.png';
import integrationImg from '../../assets/integrationImg.png';
import accessibilityImg from '../../assets/accessibilityImg.png';
import expandImg from '../../assets/expandImg.png';
import trustImg from '../../assets/trustImg.png';
import techImg from '../../assets/techImg.png';

const Collaborations = () => {
  return (
    <div className="collaborations-page">
      {/* Header Section */}
      <div className="collab-header">
        <img src={headerImage} alt="Smarter Machines. Better Snacks." className="header-image" />
        <div className="header-content">
          <h1>Innovate Together with Go-Grab</h1>
          <p>
            When you collaborate with Go-Grab, you're not just adding a product to your space - 
            you're becoming part of a revolution in customer convenience and brand exposure.
          </p>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="benefits-grid">
        <div className="benefit-card">
          <img src={brandVisibilityImg} alt="Skyrocket your Brand Visibility" />
          <h3>Skyrocket your Brand Visibility</h3>
          <p>Increase your brand's exposure with our high-traffic locations.</p>
        </div>

        <div className="benefit-card">
          <img src={integrationImg} alt="Effortless Integration" />
          <h3>Effortless Integration</h3>
          <p>Seamlessly incorporate our solutions into your existing operations.</p>
        </div>

        <div className="benefit-card">
          <img src={accessibilityImg} alt="Maximize Accessibility" />
          <h3>Maximize Accessibility</h3>
          <p>Make your products available to customers 24/7.</p>
        </div>

        <div className="benefit-card">
          <img src={expandImg} alt="Expand Affordably" />
          <h3>Expand Affordably</h3>
          <p>Grow your reach without significant infrastructure investment.</p>
        </div>

        <div className="benefit-card">
          <img src={trustImg} alt="Build Trust" />
          <h3>Build Trust</h3>
          <p>Enhance customer confidence with reliable, always-available solutions.</p>
        </div>

        <div className="benefit-card">
          <img src={techImg} alt="Leverage Technology" />
          <h3>Leverage Technology</h3>
          <p>Utilize cutting-edge tech to enhance customer experience.</p>
        </div>
      </div>
    </div>
  );
};

export default Collaborations;