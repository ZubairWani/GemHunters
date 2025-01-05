import React from 'react'
import { Section } from '../../Section/Section'
import glbImg from '../../../assets/images/Group 49.png';
import cardImg from '../../../assets/images/image 14.png';
import img54 from '../../../assets/images/Group 54.png';
import './Network.scss'
export const Network = () => {
    return (
        <Section name={"flex-column network-section"}>
            <div className="head">
                <p className="badge">No Junk, Just Gems</p>
                <h2 className="section-title">What <span>Else Do You</span> Get?</h2>

            </div>


            <div className="features">
                {/* Left Feature - Global Networking */}
                <div className="feature-card">

                    <div className="left">
                        <h3 className="feature-title">Global Networking Opportunities</h3>
                        <p className="feature-description">
                            Gem Hunters’ annual membership grants you access to exclusive meet-ups at some of the world's most prestigious crypto events. Build connections and uncover opportunities IRL.
                        </p>
                    </div>
                    <div className="feature-image">
                        <img
                            src={glbImg}
                            alt="Global Networking"
                        />
                    </div>
                </div>

                {/* Right Feature - Maximise Portfolio */}
                <div className="feature-card financial">

                    <div className="financial-chart">
                        <img
                            src={cardImg}
                            alt="Financial Chart"
                        />
                    </div>

                    <div className="right">

                        <h3 className="feature-title">Maximise Your Portfolio’s Potential</h3>
                        <p className="feature-description">
                            We provide real-time market coverage and comprehensive reports so you stay ahead. With constantly updated insights, your portfolio is in good hands.
                        </p>
                    </div>

                </div>



            </div>

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



        </Section>
    )
}
