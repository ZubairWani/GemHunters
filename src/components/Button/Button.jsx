import React from 'react'
import './Button.scss'
export const Button = ({text}) => {
  return (
    <button className="cta-button"> {text} </button>
  )
}
