import React from 'react'
import './Photo.css'
import Bhanu2 from '../../assets/Bhanu2.png'


const Photo = () => {
  return (
    <div id='home' className='photo'>
        <img style={{width:"15%"}}  src={Bhanu2} alt=""/>
        <h1><span>I'm BhanuTeja</span> ,Frontend Developer </h1>
        <p> I'm Bhanu Teja Pathapati, a passionate software developer specializing in ReactJS, Python, and web technologies, dedicated to building innovative and user-friendly applications.</p>
        <div className='photo-action'>
            <div className='photo-connect'><a className='anchor-link' href='#contact'>Connect with me</a></div>
            <div className='resume'><a className='anchor-link' href='/resume'>My resume</a></div>

        </div>
    </div>
  )
}

export default Photo
