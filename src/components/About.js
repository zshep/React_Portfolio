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
                        My name is Zach Sheperdigian, but please call me Shep. I have spent 10 years as an educator teaching remdial and advanced physics to high school students. I have a huge passion for learning in general so I was naturally excited when I started a fullstack web development bootcamp.

                        <br>
                        
                        </br>

                        I love how programing gives you the ability to build essientially anything you want, your imagination being the only limitation. While I am still relatively new to coding I love figuring new things out and learning new technologies to make greater web applications. It feels so rewarding to go from bashing your head against the keyboard to sucessfuly making your program work. 
                        </p>
                    </div>
                
                      
        </div>
    )
}


export default About;