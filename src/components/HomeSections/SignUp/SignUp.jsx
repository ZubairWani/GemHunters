import React from 'react'
import { Section } from '../../Section/Section'
import { Button } from '../../Button/Button'
import img4 from '../../../assets/images/Group 25.png'
import img5 from '../../../assets/images/Group 26 (1).png';
import img6 from '../../../assets/images/image 5 (1).png';
import './SignUp.scss'
export const SignUp = () => {
    return (
        <Section name={"flex-row SignupWrapper"}>
            <h1> START YOUR JOURNEY IN </h1>
            <h1>3 SIMPLE STEPS</h1>
            <p>Joining Gem Hunters is quick, easy, and designed to get you immediate value.</p>

            <ul>
                <li>
                    <h3>QUICK SIGN UP</h3>
                    <p>Complete the registration form with your details to get started</p>
                    <img className='img4' src={img4} alt="" />
                </li>
                <li>
                    <h3>VERIFY YOUR EMAIL</h3>
                    <p>Complete the registration form with your details to get started</p>
                    <img className='img5' src={img5} alt="" />
                </li>
                <li>
                    <h3>UNLOCK EXCLUSIVE ACCESS</h3>
                    <p>Complete the registration form with your details to get started</p>
                    <img className='img6' src={img6} alt="" />
                </li>

            </ul>

            <Button text={"Start Your Journey Today"}/>
        </Section>
    )
}


// return (
//     <Section name={"flex-row sign-up"}></Section>
// )