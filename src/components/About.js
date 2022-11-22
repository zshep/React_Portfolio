import React from "react";
import Image from "react-bootstrap/Image";
import shepic from './Shepic.png';


function About(){

    return(
        <div>
            
            <Image src = {shepic} fluid thumbnail/>

            <div className="aboutMe content">
                <p>I have spent 10 years teaching high school physics and AP physics in the Seattle Public Schools. I have a love for learning new things including how to write code to incorporate my physics background. I am a full stack MERN Web developer looking to improve my Knowledge and skills on web development. </p>
                {/* TO DO: Add short bio */}
            </div>


        </div>
    )
}


export default About;