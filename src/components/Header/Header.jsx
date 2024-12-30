import React from 'react'
import './Header.scss'
import logImg from '../../assets/images/image 2.png'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <header className="navbar">
      <Link to={"/"}>
        <img className='logo' src={logImg} alt="log img" />
      </Link>
      <Button text={"Start Your Journey Today"} />
    </header>
  )
}
