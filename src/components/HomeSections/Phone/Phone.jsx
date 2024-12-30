import React from 'react'
import { Section } from '../../Section/Section'
import { Button } from '../../Button/Button'
import phoneImg from '../../../assets/images/image 13.png';

export const Phone = () => {
    return (
        <Section name={"flex-row phone-section"}>
            <div className="image-container">
                <img
                src={phoneImg}
                alt="Phone"
                />
            </div>
        
            <div className="content">
                <h1 className="title">
                Unlock the Power of <span>Digital Lobbies</span>
                </h1>
                <p className="description">
                Gem Hunters grants you unparalleled access to a treasure trove of resources, private market data, and digital lobbies, helping you master the markets with confidence.
                </p>
                <p className="description">
                When you join, you’ll dive into a real-time ecosystem of insights, reports, and private alpha—all at your fingertips.
                </p>
                <Button text={"Start Your Journey Today"} />
            </div>
        </Section>
    )
}
