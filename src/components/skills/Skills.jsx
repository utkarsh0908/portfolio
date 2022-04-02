import React from 'react'
import "./skills.scss"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Skills = () => {
    const skill = [
        {
            id:"1",
            imgSrc:"c",
            cardTitle:"C++",
            cardText:"Proficient in C++, familiar with classes , objects , inheritence and other basis terminologies.",
        },
        {
            id:"2",
            imgSrc:"react",
            cardTitle:"Web Development",
            cardText:"Familiar with MERN stack, Css, Scss, HTML, Javascript (currently learning Front End Development).",
        },
        {
            id:"3",
            imgSrc:"java",
            cardTitle:"Other Languages",
            cardText:"Familiar with Java, Python, and C#",
        }
    ]


    return (
        <div className="skills" id="skills">
            <h1>SKILLS</h1>
            <div className="inside">
                {skill.map((s)=>(
                    <div class="card box" style={{width: "18rem"}}>
                        <img src={require("../../assets/" + s.imgSrc + ".png")} class="card-img-top" alt="something" />
                        <div className="card-body">
                            <h5 class="card-title">{s.cardTitle}</h5>
                            <p class="card-text">{s.cardText}</p>
                        </div>
                    </div>)
                )}
            </div>
        </div>
    )
}
export default Skills;