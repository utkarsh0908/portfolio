import React from 'react'
import { useState } from 'react'
import "./works.scss"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

const Works = () => {
    const [slide, setSlide] = useState(0);
    const data = [
        {
            id: "1",
            img: "assets/black.png",
            title: "Some Future Project 1",
            desc: "Will be updated in Future"

        },
        {
            id: "2",
            img: "assets/black.png",
            title: "Some Future Project 2",
            desc: "Will be updated in Future"
        },
        {
            id: "3",
            img: "assets/black.png",
            title: "Some Future Project 3",
            desc: "Will be updated in Future"
        }
    ];

    const handleClick = (direction) => {
        direction === "left" ? setSlide(slide > 0 ? slide - 1 : (data.length - 1)) : 
        setSlide(slide <  (data.length - 1 ) ? slide + 1 : 0);
    }
    return (
        <div className="works" id="works">
            <h1>PROJECTS</h1>
            <div className="inside">
                <div className="slider" style={{ transform: `translateX(-${slide * 100}vw)` }}>
                    {data.map((d) => (
                        <div className="container">
                            <img src={d.img} />
                            <h1>{d.title}</h1>
                            <h6>{d.desc}</h6>
                        </div>
                    ))}
                </div>
                <div className="arrow">
                <div className="arrleft" onClick={()=>handleClick("left")}>
                    <KeyboardArrowLeftIcon className="leftarrow" />
                </div>
                <div className="arright" onClick={()=>handleClick()}>
                    <KeyboardArrowRightIcon className="rightarrow"  />
                </div>
                </div>
            </div>
        </div>
    );
}

export default Works;