import React from "react"
import {useState} from "react"
import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Sidebar from "./components/sidebar/Sidebar"
import Works from "./components/works/Works"
import "./app.scss"

const App = () => {
    const [menuopen, setmenuopen] = useState(false);
    
 return (
     <div className="app"> 
        <Topbar menuopen={menuopen} setmenuopen={setmenuopen}/>
        <Sidebar menuopen={menuopen} setmenuopen={setmenuopen}/>
        <div className="sections">
            <Intro/>
            <Portfolio/>
            <Testimonials/>
            <Works/>
            <Contact/>
        </div>
     </div>
 )
}
export default App;