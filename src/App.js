import React from "react"
import {useState} from "react"
import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import Skills from "./components/skills/Skills"
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
            <About/>
            <Skills/>
            <Works/>
            <Contact/>
        </div>
     </div>
 )
}
export default App;