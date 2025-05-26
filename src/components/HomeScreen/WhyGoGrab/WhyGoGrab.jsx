import React, { useEffect } from "react";
import "./WhyGoGrab.css"; // Create this CSS file for styling
import image3 from "../../../assets/why-gograb/3c6850f0a0a0f871b2b165c891507a537f505e2e.png"; // Import your images
import image2 from "../../../assets/why-gograb/14c72926c0e5e6dce89e0b3bb6cc106fd17ddfb7.png";
import image1 from "../../../assets/why-gograb/8205e36b883d1b9904411974101d7b446fa4d725.png";
import gograb_reel from "../../../assets/go-grab_reel.mp4";

const WhyGoGrab = () => {
  return (
    <div className="why-go-grab">
      <h2>Why Go-Grab?</h2>
      <p className="subtitle">Always Stocked, Zero-Hassle Smart Vending</p>
      <div className="features">
        <div className="feature">
          <img src={image1} alt="AI-Smart, Always Stocked" />
          <p style={{ color: "#0F78E4" }}>AI-Smart, Always Stocked</p>
          <p className="description">
            Predictive analytics keep shelves full, so users always find their
            favorite snack.
          </p>
        </div>
        <div className="feature">
          <img src={image2} alt="Personalized for Your Space" />
          <p style={{ color: "#0F78E4" }}>Personalized for Your Space</p>
          <p className="description">
            Product mix and features tailored to your unique crowd.
          </p>
        </div>
        <div className="feature">
          <img src={image3} alt="Chosen by India’s Elite" />
          <p style={{ color: "#0F78E4" }}>Chosen by India’s Elite</p>
          <p className="description">
            Trusted by IITs, IIMs, NITs — plus other premier campuses of
            excellence.
          </p>
        </div>
      </div>
     
      <div style={{textAlign: 'center',marginTop : '20px', marginBottom: '20px',fontSize: '32px',color: '#0F78E4',fontWeight: 700}}>
        <p>Automated. Intelligent. Hassle-Free.</p>
      </div>
      <div className="video-section">
        <div className="video-container">
          {gograb_reel ? (
            <video controls>
              <source
                src={gograb_reel}
                className="mainvideo"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="video-description">
          <p>
            At Go-Grab, we believe modern problems deserve modern solutions and
            that includes how people access everyday essentials.
          </p>
          <p>
            Our vending machines aren’t just hardware; they’re thoughtfully
            designed experiences that fit seamlessly into the way we live, work,
            and move.
          </p>
          <button className="partner-button3">Partner With Us</button>
        </div>
      </div>
    </div>
  );
};
export default WhyGoGrab;
