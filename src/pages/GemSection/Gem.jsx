import React from "react";
import "./Gem.scss";
import leftImg from '../../assets/images/Group 62.png'
import rightImg from '../../assets/images/Group 63.png'
export const Gem = () => {
  return (
    <div className="gem-section">
      <div className="gem-content">
        <h1>Ready to <span>Uncover the Gems?</span> </h1>
        <p>
          Join thousands of investors who trust Gem Hunters to simplify the
          crypto market and unlock exclusive opportunities.
        </p>
        <button className="gem-btn">Start Your Journey Today</button>
      </div>
    </div>
  );
};
