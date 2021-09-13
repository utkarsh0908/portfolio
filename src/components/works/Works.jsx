import React from 'react'
import "./works.scss"
import { Carousel } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Works = () => {
    return (
        <div className="works" id="works">
        <h1>SKILLS</h1>
            <div className="inside">
            <div className="slider">
                <Carousel className="workSlider" nextLabel=" " prevLabel=" " fade>
                    <Carousel.Item >
                        <img
                            className="d-block"
                            src="assets/black.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Some Future Work</h3>
                            <p>Random caption</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="assets/black.png"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Some Future Work</h3>
                            <p>Random caption</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="assets/black.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Some Future Work</h3>
                            <p>Random caption</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            </div>
        </div>
    );
}

export default Works;