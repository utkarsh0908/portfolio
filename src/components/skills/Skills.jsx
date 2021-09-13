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
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card box" style={{width: "18rem"}}>
                    <img src="assets/react.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card box" style={{width: "18rem"}}>
                    <img src="assets/java.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;