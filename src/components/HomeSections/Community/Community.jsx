import React from 'react'
import { Button } from '../../Button/Button'
import { Section } from '../../Section/Section';
import './Community.scss'

import profile1 from "../../../assets/images/Community/profile1.png"
import profile2 from '../../../assets/images/Community/profile2.png'
import profile3 from '../../../assets/images/Community/profile3.png'
import profile4 from '../../../assets/images/Community/profile4.png'
import profile5 from '../../../assets/images/Community/profile5.png'
import profile6 from '../../../assets/images/Community/profile6.png'
import profile7 from '../../../assets/images/Community/profile7.png'
import profile8 from '../../../assets/images/Community/profile8.png'
import profile9 from '../../../assets/images/Community/profile9.png'
import profile10 from '../../../assets/images/Community/profile10.png'
import profile11 from '../../../assets/images/Community/profile11.png'
import profile12 from '../../../assets/images/Community/profile12.png'


export const Community = () => {
    const testimonials = [
        { "name": 'Vanessa Chambers', "location": 'Westheimer', "text": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', "img":profile1 },
        { name: 'Jared Black', location: 'Hillcrest', text: 'Lorem Ipsum has been the industry’s standard dummy text since the 1500s.', img: profile2 },
        { name: 'Rachel Dixon', location: 'W Gray St', text: 'It is a long established fact that a reader will be distracted by the readable content of a page.', img: profile3 },
        { name: 'Willie Lawson', location: 'Lakeview St', text: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', img: profile4 },
        { name: 'Patsy Harris', location: 'Hickory Creek', text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.', img: profile5 },
        { name: 'Miguel Gonzalez', location: 'Spring St', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', img: profile6 },
        { name: 'Miguel Gonzalez', location: 'Spring St', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', img: profile7 },
        { name: 'Miguel Gonzalez', location: 'Spring St', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', img: profile8 },
        { name: 'Miguel Gonzalez', location: 'Spring St', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', img: profile9 },
        { name: 'Miguel Gonzalez', location: 'Spring St', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', img: profile10 },
        { name: 'Miguel Gonzalez', location: 'Spring St', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', img: profile11 },
        { name: 'Miguel Gonzalez', location: 'Spring St', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', img: profile12 },
    ];
    console.log(profile1)
    
    return (
        <Section name={"flex-row community-page"}>
            <h2 className="reviews-count">200+ Reviews</h2>
            <h1 className="title">Hear from the <span>Gem Hunters Community</span></h1>

            <div className="testimonials">
                {testimonials.map((item, index) => (
                    <div className="testimonial-card" key={index}>
                        <div className="profile-pic">
                            <div className="top">
                                <div className="icon">
                                <img src={item.img} alt={item.name} />
                                </div>
                                <div className="iconText">
                                    <h3 className="name">{item.name}</h3>
                                    <p className="location">{item.location}</p>
                                </div>
                            </div>

                        </div>

                        <p className="text">{item.text}</p>
                    </div>

                ))}
            </div>
            <Button text={"Start Your Journey Today"} />
        </Section>
    )
}
