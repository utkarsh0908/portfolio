import React from 'react'
import { useState } from 'react'
import "./works.scss"
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

const Works = () => {
    const [slide, setSlide] = useState(0);
    const data = [
        {
            id: "1",
            img: "tap",
            title: "T&P Cell Official Website",
            link: "https://github.com/utkarsh0908/tap"

        },
        {
            id: "2",
            img: "weatherapp",
            title: "Weather App",
            link: "https://github.com/utkarsh0908/WeatherApp"
        },
        {
            id: "3",
            img: "sih",
            title: "App for Hospital Services",
            link: "https://github.com/utkarsh0908/Smart-India-Hackathon"
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
                            <div ><img src={require("../../assets/" + d.img + ".png")} alt="loading" /></div>
                            <div >{d.title}</div>
                            <a href={d.link} className='btn btn-outline-primary'>More info</a>
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