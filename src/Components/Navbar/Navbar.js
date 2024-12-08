import React ,{useState}from 'react';
import './Navbar.css'


const Navbar = () => {

   const [menu,setMenu] =useState("home")
  return (
    <div className='navbar'>
        <ul className='nav-menu'>
          <li><a className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}   className={menu === "home" ? "active" : "" }>Home</p></a></li>
          <li><a className='anchor-link' href='#about'><p onClick={()=>setMenu("about")}  className={menu === "about" ? "active" : ""}>About Me</p></a></li>
          <li><a className='anchor-link' href='#services'><p onClick={()=>setMenu("services")} className={menu === "services" ? "active" : ""}>Services</p></a></li>
          <li><a className='anchor-link' href='#work'><p onClick={()=>setMenu("work")}  className={menu === "work" ? "active" : ""} >Portfolio</p></a></li>
          <li><a className='anchor-link' href='#contact'><p onClick={()=>setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</p></a></li>
          <li><a className='anchor-link' href='#Resume'><p onClick={()=>setMenu("Resume")} className={menu === "Resume" ? "active" : ""}>My Resume</p></a></li>
        </ul>
        <div className='nav-connect'><a className='anchor-link' href='#contact'>Connect With Me</a></div>
      
    </div>
  )
}

export default Navbar
