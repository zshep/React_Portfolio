import React from "react";
import Image from "react-bootstrap/Image";
import shepic from './Shepic.png';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import "./style.css";

const styles = {
    main:{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'

    },
    row: {
        
        width: "100%"
    },
    pic: {
        width: "250px",
        height: "auto"
    },
    bio: {
        width: '50%',
        marginTop: "4rem"
        
    }
    
}

function About(){

    return(
        <div style={styles.main}>
        
               
                    <div style={styles.pic}>
                        <h1>About Me</h1>
                    
                        <Image src = {shepic} thumbnail/>
                    </div>
                
                
                    <div style ={styles.bio}>
                        <p>
                        I have spent 10 years teaching high school physics and AP physics in the Seattle Public Schools. I have a love for learning new things including how to write code to incorporate my physics background. I am a full stack MERN Web developer looking to improve my knowledge and skills on web development.
                        </p>
                    </div>
                
                      
        </div>
    )
}


export default About;