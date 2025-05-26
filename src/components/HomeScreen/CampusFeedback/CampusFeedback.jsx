import React from 'react';
import './CampusFeedback.css'; // Create this CSS file for styling
// import judithBlackImage from './assets/judith-black.png'; // Import your images

const CampusFeedback = () => {

 const judithBlackImage = "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L3Jhd3BpeGVsX29mZmljZV8yN19wb3J0cmFpdF9vZl9hX3lvdW5nX2luZGlhbl9tYW5fc21pbGluZ193ZWFyaV8yN2M3M2NhZC1jMjM2LTQ0YmQtYWYxMi01OTgxZGE2NzNkODMucG5n.png"
  return (
    <div className="campus-feedback">
      <h2>Testimonials</h2>
      <p className="subtitle">From late-night cravings to mid-lecture munchies – students can't get enough of Go-Grab.</p>
      <div className="feedback-cards">
        <div className="feedback-card">
          <p className="feedback-text">“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae.”</p>
          <div className="feedback-author">
            <img src={judithBlackImage} alt="Judith Black" />
            <div className="author-info">
              <p className="author-name">Judith Black</p>
              <p className="author-designation">CEO of Workcation</p>
            </div>
          </div>
        </div>
        <div className="feedback-card">
          <p className="feedback-text">“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae.”</p>
          <div className="feedback-author">
            <img src={judithBlackImage} alt="Judith Black" />
            <div className="author-info">
              <p className="author-name">Judith Black</p>
              <p className="author-designation">CEO of Workcation</p>
            </div>
          </div>
        </div>
        <div className="feedback-card">
          <p className="feedback-text">“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae.”</p>
          <div className="feedback-author">
            <img src={judithBlackImage} alt="Judith Black" />
            <div className="author-info">
              <p className="author-name">Judith Black</p>
              <p className="author-designation">CEO of Workcation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusFeedback;
