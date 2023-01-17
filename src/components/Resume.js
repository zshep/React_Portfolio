import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import "./style.css";

//Resume styles object
const styles = {
    button: {
        backgroundColor: "whitesmoke",
        color: "black",
        padding: 'none',
        btnBorderColor: 'none',
        borderColor: "none"
    },
    container: {
        alignItems: "center",
        display: "flex",
        justifyContent: "space-around",
        color: "green"
    },
    profList: {
        
        listStyle: 'none',
        
    },
    h1: {
        display: 'flex',
        justifyContent: 'center'

    }

}


function Resume () {
    const Clickdownload = () => {
        // using fetch moethod to grab the pdf
        fetch('./Shep_Resume.pdf').then(response => {
            response.blob().then(blob => {
                //const fileURL = window.URL.createObjectURL(blob);

                //logic to download file with the button click
                let alink = document.createElement('a');
                alink.href = "./Shep_Resume.pdf";
                alink.download = `Shep_Resume`;
                alink.click();
            })
        })
    }

    return(

        <div>
                <h1 style={styles.h1}>List of Proficiencies</h1>

                
            <div>
                <ul style={styles.profList}>
                    <li>
                        <h5>Languages:</h5>
                        <span>HTML5, CSS, JavaScript ES6, SQL, Python</span>
                    </li>

                    <li>
                        <h5>Applications:</h5>
                        <span></span>
                    </li>

                    <li>
                        <h5>Tools:</h5>
                        <span></span>
                    </li>

                    <li>
                        <h5>Skills:</h5>
                        <span></span>
                    </li>
                    
                </ul>
            </div>

            <Container style={styles.container} >

                <Button style={styles.button} value="download" onClick={Clickdownload}>Download Resume</Button>

            </Container>

        </div>

    )

}

export default Resume;