import React from 'react';
import "./topbar.scss"
import {Call, Mail} from '@material-ui/icons';

export default function Topbar({menuopen, setmenuopen}) {
    return (
        <>
        <div className={"topbar " + (menuopen && "active")} >
            <div className="inside">
                <div className="left">
                    <a href="#intro" className="logo">Portfolio.</a>
                    <div className="itemcontainer">
                        <Call/>
                        <span>+91 8862925042</span>
                    </div>
                    <div className="itemcontainer">
                        <Mail/>
                        <span>utkarsh13.ugec20@iiitranchi.ac.in</span>
                    </div>
                </div>
                <div className="right">
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
