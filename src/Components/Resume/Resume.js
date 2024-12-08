import React from 'react'
import './Resume.css'


const Resume = () => {
  return (
    <div id='Resume' className="resume-viewer">
      <h2>My Resume</h2>
      <iframe
        src="/resume.pdf"
        width="100%"
        height="800px"
        style={{ border: "none" , pointerEvents: "none"}}
        title="Resume"
      ></iframe>
    </div>
  )
}

export default Resume
