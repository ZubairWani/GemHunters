import React from 'react'
import { Section } from '../../Section/Section'
import { Button } from '../../Button/Button'
import img2 from "../../../assets/images/image 7.png"
import img3 from "../../../assets/images/image 8.png"

export const Featue = () => {
    return (
        <Section name={"flex-row feature"}>
            <div className="left">
                <h1>Your Trusted Guide in the Crypto Market</h1>
                <p>Gem Hunters simplifies the complex world of crypto with research-backed insights and expert guidance, designed for every investor. </p>
                <Button text={"Start Your Journey Today"}/>
                <div className="leftimages">
                <img className='img3' src={img3} alt="" />
                <img className='img2' src={img2} alt="" />
                </div>
                
            </div>
            <div className="right">
                <ul>
                    <li>
                        <div className="head">
                            <img src="" alt="" />
                            <h3>Seasoned Analysis</h3>
                        </div>
                        <div className="text">
                            <p>Our team is comprised of experts in multiple niches of crypto, including airdrops, lower market cap gems, and compelling new narratives ensuring that you can always stay ahead.</p>
                            
                        </div>
                    </li>
                    <li>
                        <div className="head">
                            <img src="" alt="" />
                            <h3>Seasoned Analysis</h3>
                        </div>
                        <div className="text">
                            <p>Our team is comprised of experts in multiple niches of crypto, including airdrops, lower market cap gems, and compelling new narratives ensuring that you can always stay ahead.</p>
                            
                        </div>
                    </li>
                    <li>
                        <div className="head">
                            <img src="" alt="" />
                            <h3>Seasoned Analysis</h3>
                        </div>
                        <div className="text">
                            <p>Our team is comprised of experts in multiple niches of crypto, including airdrops, lower market cap gems, and compelling new narratives ensuring that you can always stay ahead.</p>
                            
                        </div>
                    </li>
                    <li>
                        <div className="head">
                            <img src="" alt="" />
                            <h3>Seasoned Analysis</h3>
                        </div>
                        <div className="text">
                            <p>Our team is comprised of experts in multiple niches of crypto, including airdrops, lower market cap gems, and compelling new narratives ensuring that you can always stay ahead.</p>
                            
                        </div>
                    </li>
                    <li>
                        <div className="head">
                            <img src="" alt="" />
                            <h3>Seasoned Analysis</h3>
                        </div>
                        <div className="text">
                            <p>Our team is comprised of experts in multiple niches of crypto, including airdrops, lower market cap gems, and compelling new narratives ensuring that you can always stay ahead.</p>
                            
                        </div>
                    </li>
                    <li>
                        <div className="head">
                            <img src="" alt="" />
                            <h3>Seasoned Analysis</h3>
                        </div>
                        <div className="text">
                            <p>Our team is comprised of experts in multiple niches of crypto, including airdrops, lower market cap gems, and compelling new narratives ensuring that you can always stay ahead.</p>
                            
                        </div>
                    </li>
                </ul>
            </div>
        </Section>
    )
}
