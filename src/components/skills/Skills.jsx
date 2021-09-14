import React from 'react'
import "./skills.scss"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Skills = () => {
    return (
        <div className="skills" id="skills">
            <h1>SKILLS</h1>
            <div className="inside">
                <div class="card box" style={{width: "18rem"}}>
                    <img src="assets/c.png" class="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 class="card-title">C++</h5>
                        <p class="card-text">Proficient in C++, familiar with classes , objects , inheritence and other basis terminologies.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card box" style={{width: "18rem"}}>
                    <img src="assets/react.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Web Development</h5>
                        <p class="card-text">Familiar with MERN stack, Css, Scss, HTML, Javascript (currently learning Front End Development).</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card box" style={{width: "18rem"}}>
                    <img src="assets/java.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Other Languages</h5>
                        <p class="card-text">Familiar with Java, Python, and KOTLIN</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;