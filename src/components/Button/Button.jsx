import React from 'react'
import './Button.scss'
export const Button = ({type, text}) => {
  return (
    <button type={type} className="cta-button"> {text} </button>
  )
}
