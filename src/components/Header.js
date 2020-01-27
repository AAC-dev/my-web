import React from 'react';
import videoSrc from '../static/sample.mp4';



export const Header = () => {

    return (
        <div className="header">
            <div className="">
                <nav className="navigation-bar">
                    <div >
                        <a href="#contact"><i>Contact</i></a>
                        <a href="#about"><i>About</i></a>
                    </div>
                </nav>
                <div className="header-typorgaphy">
                    <h1 className="main-header">ADI COHEN</h1>
                    <h3>WEB DEVELOPER</h3>
                </div>
            </div>
            <video className="header-video-bg" autoPlay loop muted poster="">
                <source src={videoSrc} type=" video/mp4" />
            </video>
        </div >
    )
}

export default Header;