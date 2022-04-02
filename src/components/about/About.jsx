import React from 'react'
import "./about.scss"

const About = () => {
    return (
        <div className="portfolio" id="portfolio">
                <h1>ABOUT ME</h1>
            <div className="inside">
            <div className="imgcontainer">
                    <img className='img' src={require("../../assets/propic.png")} alt="can't be loaded"/>
            </div>
                <div className="content">
                <div className="para">

                    I am a sophomore at Indian Institute of Information Technology Ranchi, India pursuing  Bachelor of Technology (B.Tech) in Electronics and Communication.
                    <br/>
                    <br/>
                    I am proficient in C++ with a decent knowledge of java, python, javascript. I've been doing programming since 12th standard. I've been into Web Apps Development using REACT since 1st semester of my Bachelor's. 
                </div>
                </div>
            </div>
        </div>
    )
}
export default About;