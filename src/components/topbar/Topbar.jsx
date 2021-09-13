import React from 'react';
import "./topbar.scss"
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function Topbar({menuopen, setmenuopen}) {
    return (
        <>
        <div className={"topbar " + (menuopen && "active")} >
            <div className="inside">
                <div className="left">
                    <a href="#intro" className="logo">Portfolio.</a>
                    
                    </div>
                
                <div className="right">
                <div className="itemcontainer">
                        <InstagramIcon/>  
                    </div>
                    <div className="itemcontainer">
                        <GitHubIcon/>
                    </div>
                    <div className="itemcontainer">
                        <LinkedInIcon/>
                    </div>
                    <div className="itemcontainer">
                        <TwitterIcon/>
                    </div>
                    <div className="hamburger" onClick={()=>{setmenuopen(!menuopen)}}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
