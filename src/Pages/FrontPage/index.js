import React from 'react'
import './FrontPage.css'
import FrontImage from '../../Assets/frontImage.png'
import MobileImage from '../../Assets/ipadImage.png'
export default function FrontPage() {
  return (
    <div className='frontview-container'>
        <img src={FrontImage} alt={FrontImage} width='100%' className='laptop-image'/>
        <img src={MobileImage} alt={MobileImage} width='100%' className='mobile'/>
        <div className='frontview-text'>
            Watch something incredible.
        </div>
    </div>
  )
}
