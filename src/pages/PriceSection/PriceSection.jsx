import React from 'react';
import './PriceSection.scss';
import img54 from '../../assets/images/Group 54.png';
export const PriceSection = () => {
  return (
    <div className="price-section">
      <div className="container">
        <div className="content">
          <h1>One Plan. One Price. Endless Possibilities.</h1>
          <p>
            Transform your investment strategy with exclusive insights, expert research, 
            and real-time guidance—all in one simple membership.
          </p>
          <button className="cta-button">Start Your Journey Today</button>
        </div>
        <div className="image-container">
          <img 
            src={img54}
            alt="Investment Insights" 
            className="graphic-image"
          />
        </div>
      </div>
    </div>
  );
};
