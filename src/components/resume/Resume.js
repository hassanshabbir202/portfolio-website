import React from 'react'
import resume from "../images/resume.png"

const Resume = () => {
    const heading = {
        textAlign:"center",
        marginTop:"6vh",
        fontSize:"42px"
    }

    const containerStyle = {
        display:"flex",
        justifyContent:"center",
        marginTop:"6vh"
    }

    const imgStyle = {
        border:"1px solid black",
    }
  return (
    <div>
        <h1 style={heading}>Resume</h1>
      <div className="container" style={containerStyle}>
        <img src={resume} alt="" style={imgStyle}/>
      </div>
    </div>
  )
}

export default Resume
