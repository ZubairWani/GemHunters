import React from "react";
import './Hero.scss'
import img1 from '../../../assets/images/image 5.png';
import { Section } from "../../Section/Section";
import tick from "../../../assets/images/TickIcon.png";
import { Form } from "./Form/Form";

export const Hero = () => {
  return (
    // <section>

    // </section>
    <Section name={"flex-row hero"}>
      <div className="hero-content">
        <h1>Discover Hidden <span>Gems in Crypto</span> and Beyond</h1>
        <p>
          Join the community that's redefining crypto research. Access expert
          insights, actionable reports, and the tools you need to stay ahead in
          the market.
        </p>
        <ul>
          <li><img src={tick} alt="tick" /> In-depth market analysis</li>
          <li><img src={tick} alt="tick" /> Actionable investment reports</li>
          <li><img src={tick} alt="tick" /> Designed for beginners and pros alike</li>
        </ul>
      </div>
      <img className="miner" src={img1} alt="img miner here" />

      <Form />

    </Section>
  );
};


{/* <div className="hero">
  <div className="hero-content">
    <h1>
      Discover Hidden <span>Gems in Crypto</span> and Beyond
    </h1>
    <p>
      Join the community that's redefining crypto research. Access expert
      insights, actionable reports, and the tools you need to stay ahead in
      the market.
    </p>
    <ul>
      <li> In-depth market analysis</li>
      <li> Actionable investment reports</li>
      <li> Designed for beginners and pros alike</li>
    </ul>

  </div>

  
  <img className="img1" src={img1} alt="img here" />


  <div className="hero-form">
    <h2>Join Gem Hunters Today</h2>
    <form>
      <input type="text" placeholder="Name" />
      <input type="tel" placeholder="Phone Number" />
      <input type="email" placeholder="Email" />
      <select>
        <option>Current Crypto Portfolio Balance</option>
        <option>$25,000 - $50,000</option>
        <option>$50,000 - $100,000</option>
        <option>$100,000+</option>
      </select>
      <textarea placeholder="Message"></textarea>
      <button type="submit">Get Started</button>
    </form>
  </div>
</div> */}