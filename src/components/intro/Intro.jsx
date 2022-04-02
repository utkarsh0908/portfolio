import React from 'react';
import "./intro.scss";
import { init } from 'ityped';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useEffect, useRef } from 'react';

const Intro = () =>{
    const txtRef = useRef();
    useEffect(()=>{
        init(txtRef.current, { showCursor: true, 
            typeSpeed:  80,
            backDelay:  800,
            strings: ['Programmer', 'Web Developer' , 'Software Developer'] })
    },[]);

    return (
        <div className="intro" id="intro">
           <div className="left">
                <div className="imgcontainer">
                    <img src={require("../../assets/man.png")} alt="not found"/>
                </div>
           </div>
           <div className="right">
            <div className="inside">
                <h2> Hey there, I am</h2>
                <h1> Utkarsh Singh</h1>
                <h3><span ref={txtRef}></span></h3>
                <a href="#portfolio" ><ExpandMore className="down"/></a>
            </div>
           </div>
        </div>
    )
}
export default Intro;