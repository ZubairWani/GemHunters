import React from 'react'
import { Section } from '../../Section/Section'
import glbImg from '../../../assets/images/Group 49.png';
import cardImg from '../../../assets/images/image 14.png';
import img54 from '../../../assets/images/Group 54.png';
import './Network.scss'
export const Network = () => {
    return (
        <Section name={"flex-column network-section"}>
            <h2 className="section-title">What Else Do You Get?</h2>
            <p className="badge">No Junk, Just Gems</p>

            <div className="features">
                {/* Left Feature - Global Networking */}
                <div className="feature-card">
                    <h3 className="feature-title">Global Networking Opportunities</h3>
                    <p className="feature-description">
                        Gem Hunters’ annual membership grants you access to exclusive meet-ups at some of the world's most prestigious crypto events. Build connections and uncover opportunities IRL.
                    </p>
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
                    <div className="financial-data">
                        <div className="data-block">
                            <h4>$22,320</h4>
                            <p>Profit +87%</p>
                        </div>
                        <div className="data-block">
                            <h4>$72,363</h4>
                            <p>Profit +127%</p>
                        </div>
                    </div>

                    <h3 className="feature-title">Maximise Your Portfolio’s Potential</h3>
                    <p className="feature-description">
                        We provide real-time market coverage and comprehensive reports so you stay ahead. With constantly updated insights, your portfolio is in good hands.
                    </p>
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
