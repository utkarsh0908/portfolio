import React from 'react'
import "./contact.scss"
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const Contact = () => {
    return (
        <>
            <div className="contact" id="contact">
                <h1>CONTACT</h1>
                <h3>Let's be in touch!</h3>
                <div className="outer">
                    <div className="inner">
                        <div className="left">
                            <img src={require("../../assets/contact.jpg")} alt="c" className="icon" />
                        </div>
                        <div className="right">
                            <div className="rightinner">
                                <div className="mail"> <MailIcon /> utkarsh13.ugec20@iiitranchi.ac.in</div>
                                <div className="call"> <CallIcon /> +91 8862925042</div>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="upperfooter">
                            <div className="left">
                               
                            </div>
                            <div className="centre">
                                <a href="#intro" className="upwardarrow">
                                    <KeyboardArrowUpIcon className="up"/>
                                </a>
                                <div className="link">
                                    <a href="https://www.instagram.com/utkarsh_0901/" target=" " className="itemcontainer">
                                        <InstagramIcon />
                                    </a>
                                    <a href="https://github.com/utkarsh0908" target=" " className="itemcontainer">
                                        <GitHubIcon />
                                    </a>
                                    <a a href="https://www.linkedin.com/in/utkarsh-singh-432228213/" target=" " className="itemcontainer">
                                        <LinkedInIcon />
                                    </a>
                                    <a href="https://twitter.com/Utkarsh70783608" target=" " className="itemcontainer">
                                        <TwitterIcon />
                                    </a>
                                </div>
                            </div>
                            <div className="right"></div>
                        </div>
                        <div className="bottomfooter">
                            <span>Made   with   REACT  ,   Bootstrap  ,  Sass  and  ❤️</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;