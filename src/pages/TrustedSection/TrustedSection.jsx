import React, { useRef } from 'react';
import './TrustedSection.scss';

export const TrustedSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  return (
    <div className="trusted-section">
      <div className="header">
        <h1>Your Trusted Guide in the Crypto Market</h1>
        <p>
          Gem Hunters simplifies the complex world of crypto with research-backed insights
          and expert guidance, designed for every investor.
        </p>
      </div>

      <div className="scroll-container" ref={scrollRef}>
        <div className="card">
          <img src="/path-to-elite-partnership-icon.png" alt="Elite Partnerships" />
          <h3>Elite Partnerships</h3>
          <p>
            We merge insights of seasoned researchers, key opinion leaders, and traders. 
            Our reports are rooted in practical knowledge gained from our daily involvement in crypto.
          </p>
        </div>
        <div className="card">
          <img src="/path-to-trend-setting-icon.png" alt="Trend Setting" />
          <h3>Trend Setting</h3>
          <p>
            The crypto markets are influenced by trends and narratives. Our detailed reports 
            are designed to provide you with an advantage before these trends become mainstream.
          </p>
        </div>
        <div className="card">
          <img src="/path-to-weekly-updates-icon.png" alt="Weekly Updates" />
          <h3>Weekly Updates</h3>
          <p>
            New market opportunities are constantly emerging. Our team is always working to 
            provide fresh insights and weekly analysis on different crypto trends.
          </p>
        </div>
        <div className="card">
          <img src="/path-to-simplified-guidance-icon.png" alt="Simplified Guidance" />
          <h3>Simplified Guidance</h3>
          <p>
            We take complex topics and simplify them, helping you accelerate your learning curve 
            and optimize your crypto journey. We distill insights to make them easy to apply.
          </p>
        </div>
        <div className="card">
          <img src="/path-to-simplified-guidance-icon.png" alt="Simplified Guidance" />
          <h3>Simplified Guidance</h3>
          <p>
            We take complex topics and simplify them, helping you accelerate your learning curve 
            and optimize your crypto journey. We distill insights to make them easy to apply.
          </p>
        </div>
        <div className="card">
          <img src="/path-to-simplified-guidance-icon.png" alt="Simplified Guidance" />
          <h3>Simplified Guidance</h3>
          <p>
            We take complex topics and simplify them, helping you accelerate your learning curve 
            and optimize your crypto journey. We distill insights to make them easy to apply.
          </p>
        </div>
        <div className="card">
          <img src="/path-to-simplified-guidance-icon.png" alt="Simplified Guidance" />
          <h3>Simplified Guidance</h3>
          <p>
            We take complex topics and simplify them, helping you accelerate your learning curve 
            and optimize your crypto journey. We distill insights to make them easy to apply.
          </p>
        </div>
        <div className="card">
          <img src="/path-to-simplified-guidance-icon.png" alt="Simplified Guidance" />
          <h3>Simplified Guidance</h3>
          <p>
            We take complex topics and simplify them, helping you accelerate your learning curve 
            and optimize your crypto journey. We distill insights to make them easy to apply.
          </p>
        </div>
      </div>

      <div className="navigation">
        <button className="arrow left" onClick={scrollLeft}>
          &lt;
        </button>
        <button className="arrow right" onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
};
