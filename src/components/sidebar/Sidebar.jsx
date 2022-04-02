import React from 'react'
import "./sidebar.scss"

const Sidebar = ({menuopen, setmenuopen}) =>{
    return (
        <div className={"sidebar " + (menuopen && "active")}>
            <ul>
                <a href="#intro" onClick={()=>setmenuopen(false)}> Home</a>
                <a href="#portfolio" onClick={()=>setmenuopen(false)}> About Me</a>
                <a href="#skills" onClick={()=>setmenuopen(false)}> Skills</a>
                <a href="#works" onClick={()=>setmenuopen(false)}> Works</a>
                <a href="#contact" onClick={()=>setmenuopen(false)}> Contact</a>
            </ul>   
        </div>
    )
}

export default Sidebar;
