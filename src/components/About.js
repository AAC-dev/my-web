import React from 'react';


const About = () => {

    return (
        <div className="about" id="about">
            <div className="about-header"><h1 >ABOUT ME</h1></div>
            <div className="skills ">
                <ol>
                    <li ><p> I`m  Web devoloper, living in Israel.</p></li>
                    <li ><p>I enjoy building everything from SPA to rich interactive web app.</p></li>
                    <li><p>My main focus is on JavaScript and React in particular.</p></li>
                </ol>
            </div>
            <div className="block-quote ">
                <p className="quote">In the middle of difficulty lies opportunity</p>
                <p className="quote-by">Albert Einstein</p>
            </div>
        </div >

    )

}

export default About;