import React from 'react'
import "./sidebar.scss"

const Sidebar = ({menuopen, setmenuopen}) =>{
    return (
        <div className={"sidebar " + (menuopen && "active")}>
            <ul>
                <a href="#intro" onClick={()=>setmenuopen(false)}> Home</a>
                <a href="#portfolio" onClick={()=>setmenuopen(false)}> Portfolio</a>
                <a href="#testimonial" onClick={()=>setmenuopen(false)}> Testimonials</a>
                <a href="#works" onClick={()=>setmenuopen(false)}> Works</a>
                <a href="#contact" onClick={()=>setmenuopen(false)}> Contact</a>
            </ul>   
        </div>
    )
}

export default Sidebar;
