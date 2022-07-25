import React from 'react'
import './FrontPage.css'
import FrontImage from '../../Assets/frontImage.png'
export default function FrontPage() {
  return (
    <div className='frontview-container'>
        <img src={FrontImage} alt={FrontImage} width='100%'/>
        <div className='frontview-text'>
            Watch something incredible.
        </div>
    </div>
  )
}
