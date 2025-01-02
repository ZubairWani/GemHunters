import React from 'react'
import { Button } from '../../Button/Button'
import { Section } from '../../Section/Section';
import './Community.scss'
export const Community = () => {
    const testimonials = [
        { name: 'Vanessa Chambers', location: 'Westheimer', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { name: 'Jared Black', location: 'Hillcrest', text: 'Lorem Ipsum has been the industry’s standard dummy text since the 1500s.' },
        { name: 'Rachel Dixon', location: 'W Gray St', text: 'It is a long established fact that a reader will be distracted by the readable content of a page.' },
        { name: 'Willie Lawson', location: 'Lakeview St', text: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.' },
        { name: 'Patsy Harris', location: 'Hickory Creek', text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.' },
        { name: 'Miguel Gonzalez', location: 'Spring St', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    ]; 
    return (
        <Section name={"flex-row community-page"}>
            <h2 className="reviews-count">200+ Reviews</h2>
            <h1 className="title">Hear from the <span>Gem Hunters Community</span></h1>
            
            <div className="testimonials">
                {testimonials.map((item, index) => (
                <div className="testimonial-card" key={index}>
                    <div className="profile-pic">
                    
                    <img src={`https://via.placeholder.com/50?text=${item.name[0]}`} alt={`${item.name}`} />
                    </div>
                    <h3 className="name">{item.name}</h3>
                    <p className="location">{item.location}</p>
                    <p className="text">{item.text}</p>
                </div>
                
                ))}
            </div>
            <Button text={"Start Your Journey Today"}/>
        </Section>
    )
}
