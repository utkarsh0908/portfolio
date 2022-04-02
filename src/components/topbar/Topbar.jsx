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
                <a href="https://www.instagram.com/utkarsh_0901/" target=" " className="itemcontainer" id="insta">
                        <InstagramIcon/>  
                    </a>
                    <a href="https://github.com/utkarsh0908" target=" " className="itemcontainer" id="git">
                        <GitHubIcon/>
                    </a>
                    <a a href="https://www.linkedin.com/in/utkarsh-singh-432228213/" target=" " className="itemcontainer" id="linked">
                        <LinkedInIcon/>
                    </a>
                    <a href="https://twitter.com/Utkarsh70783608" target=" " className="itemcontainer" id="twitter">
                        <TwitterIcon/>
                    </a>
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
