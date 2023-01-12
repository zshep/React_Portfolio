import React from "react";
import Image from "react-bootstrap/Image";
import shepic from './Shepic.png';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import "./style.css";

const styles = {
    row: {
        display: "flex",
        flexWrap: "nowrap"
    },
    pic: {
        width: "250px",
        height: "auto"
    },
    bio: {
        float: "right",
        height: "100%"

    }
    


}


function About(){

    return(
        <Container>
                <Row style={styles.row}>
                    <div>
                        <h1>About Me</h1>
                    </div>
                    <div style={styles.pic}> 
                        <Image src = {shepic} thumbnail/>
                    </div>
                </Row>
                <main>
                    <div style ={styles.bio}>
                        <p>
                        I have spent 10 years teaching high school physics and AP physics in the Seattle Public Schools. I have a love for learning new things including how to write code to incorporate my physics background. I am a full stack MERN Web developer looking to improve my Knowledge and skills on web development.
                        </p>
                    </div>
                </main>
           
            
        </Container>
    )
}


export default About;