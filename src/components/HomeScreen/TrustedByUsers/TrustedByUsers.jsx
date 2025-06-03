import React from 'react';
import './TrustedByUsers.css'; // Create this CSS file for styling

const TrustedByUsers = () => {
  return (
    <div className="trusted-by-users">
      <h2>Trusted by Thousands of Users</h2>
      <p className="subtitle">
        Institutions across the country trust Go-Grab vending machine to provide seamless,
        on-demand access to snacks and beverages.
      </p>
      <div className="stats">
       
        <div className="stat">
          <p className="stat-number">100K+</p>
          <p className="stat-label">Happy Customers</p>
        </div>
        <div className="stat">
          <p className="stat-number">4.8+</p>
          <p className="stat-label">Average User Ratings</p>
        </div>
        <div className="stat">
          <p className="stat-number">10+</p>
          <p className="stat-label">Prominent Cities</p>
        </div>
      </div>
    </div>
  );
};

export default TrustedByUsers;
