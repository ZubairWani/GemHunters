import React, { useRef } from 'react'
import { Section } from '../../Section/Section'
import './Trusted.scss'

import icon1 from '../../../assets/images/Icon1.png'
import icon2 from '../../../assets/images/Icon2.png'
import icon3 from '../../../assets/images/Icon3.png'
import icon4 from '../../../assets/images/Icon4.png'
import icon5 from '../../../assets/images/Icon5.png'
import icon6 from '../../../assets/images/Icon6.png'


export const Trusted = () => {
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
    <Section name={"flex-row trusted-section"}>
      <div className="header">
        <h1>Your Trusted Guide in the Crypto Market</h1>
        <p>
          Gem Hunters simplifies the complex world of crypto with research-backed insights
          and expert guidance, designed for every investor.
        </p>
      </div>

      <div className="scroll-container" ref={scrollRef}>
        <div className="card">
          <div className="head">
            <img src={icon1} alt="Elite Partnerships" />
            <h3>Elite Partnerships</h3>
          </div>
          <p>
            We merge insights of seasoned researchers, key opinion leaders, and traders.
            Our reports are rooted in practical knowledge gained from our daily involvement in crypto.
          </p>
        </div>
        <div className="card">
          <div className="head">
            <img src={icon2} alt="Trend Setting" />
            <h3>Trend Setting</h3>
          </div>
          <p>
            The crypto markets are influenced by trends and narratives. Our detailed reports
            are designed to provide you with an advantage before these trends become mainstream.
          </p>
        </div>
        <div className="card">
          <div className="head">
            <img src={icon3} alt="Weekly Updates" />
            <h3>Weekly Updates</h3>
          </div>

          <p>
            New market opportunities are constantly emerging. Our team is always working to
            provide fresh insights and weekly analysis on different crypto trends.
          </p>
        </div>
        <div className="card">
          <div className="head">
            <img src={icon4} alt="Simplified Guidance" />
            <h3>Simplified Guidance</h3>
          </div>

          <p>
            We take complex topics and simplify them, helping you accelerate your learning curve
            and optimize your crypto journey. We distill insights to make them easy to apply.
          </p>
        </div>
        <div className="card">
          <div className="head">
            <img src={icon5} alt="Simplified Guidance" />
            <h3>Simplified Guidance</h3>
          </div>

          <p>
            We take complex topics and simplify them, helping you accelerate your learning curve
            and optimize your crypto journey. We distill insights to make them easy to apply.
          </p>
        </div>
        <div className="card">
          <div className="head">
            <img src={icon6} alt="Simplified Guidance" />
            <h3>Simplified Guidance</h3>
          </div>

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
    </Section>
  )
}
