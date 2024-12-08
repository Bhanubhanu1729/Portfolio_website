import React from 'react'
import './About.css'
import Bhanu1 from '../../assets/Bhanu1.jpeg'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>About me</h1>
        <img src={theme_pattern} alt=''/>
      </div>
      <div className='about-sections'>
        <div className='about-left'>
           <img  src={Bhanu1} alt=''/> 
        </div>
        <div className='about-right'>
            <div className='about-para'>
                <p>I'm a dedicated software developer with a strong foundation in ReactJS, Python, and web development technologies like HTML, CSS, and JavaScript. I enjoy building dynamic and user-friendly applications that solve real-world problems.</p>
                <p>With hands-on experience in creating efficient projects such as CRUD applications and machine learning solutions for web vulnerability detection, I thrive on challenges and constantly seek opportunities to enhance my skills. When I’m not coding, I’m exploring the latest advancements in technology and deep learning.</p>
            </div>
            <div className='about-skills'>
                <div className='about-skill'><p>HTML & CSS</p> <hr style={{width:"60%"}} /></div>
                <div className='about-skill'><p>React Js</p> <hr style={{width:"80%"}} /></div>
                <div className='about-skill'><p>JavaScript</p> <hr style={{width:"70%"}} /></div>
                <div className='about-skill'><p>Python</p> <hr style={{width:"60%"}} /></div>
                <div className='about-skill'><p>SQL</p> <hr style={{width:"60%"}} /></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
