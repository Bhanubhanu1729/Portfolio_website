import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
                <p>"Thank you for visiting my portfolio—let's connect and create something amazing together!"</p>
            </div>
        </div>
        <hr />
            <div className='footer-bottom'>
               <p className='footer-bottom-left'>© BhanuTeja.All Rights Resserved</p>
               <div className='footer-bottom-right'>
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
               </div>
            </div>
        
     </div>
  )
}

export default Footer
