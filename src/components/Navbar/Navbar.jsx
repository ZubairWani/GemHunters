import React from 'react'
import './Navbar.scss'
import logImg from '../../assets/images/image 2.png'
export const Navbar = () => {
  return (
    <nav className="navbar">

      <img src={logImg} alt="log img" />
      <button className="cta-button">Start Your Journey Today</button>

    </nav>
  )
}
