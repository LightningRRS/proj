import React from 'react'
import "./Header.css"

export const Header = () => {
  return (
    <div className='Header__container'>
        <div className='Heading'>
           <img src={require("../resources/head.jpg")} height="100%"/>
        </div>
        <div className='contact__icon'>
            [whatsapp icon]
        </div>
    </div>
  )
}
