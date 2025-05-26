import React from 'react';
import './HowItWorks.css'; // Create this CSS file for styling
import tapAndBrowseImage from '../../../assets/tap-and-browse.png'; // Import your images
import payCashlessImage from '../../../assets/pay-cashless.png';
import grabAndEnjoyImage from '../../../assets/grab-and-enjoy.png';

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <h2>How it works?</h2>
      <p className="subtitle">Snacks in Seconds – Here's How</p>
      <div className="steps">
        <div className="step">
          <img src={tapAndBrowseImage} alt="Tap & Browse" />
          <p>Tap & Browse</p>
          <p className="description">Scroll, swipe, and find what you're craving.</p>
        </div>
        <div className="step">
          <img src={payCashlessImage} alt="Pay Cashless" />
          <p>Pay Cashless</p>
          <p className="description">Choose your item(s) and pay instantly via UPI.</p>
        </div>
        <div className="step">
          <img src={grabAndEnjoyImage} alt="Grab & Enjoy" />
          <p>Grab & Enjoy</p>
          <p className="description">Grab the snack, and you're good to go.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
