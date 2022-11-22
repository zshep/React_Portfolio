import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


function Resume () {
    const Clickdownload = () => {
        fetch().then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);

                let mylink = document.createElement('a');
                mylink.href = fileURL;
                mylink.download = '';
                mylink.click();
            })
        })
    }

    return(

        <div>
            <Container center>

                <Button onClick={Clickdownload}>Download Resume</Button>

            </Container>
            
            <div>
            <h1>List of My proficiencies</h1>
            <li>
                <ul>HTML</ul>
                <ul>css</ul>
                <ul>Javascript</ul>
                <ul>Using the force</ul>


            </li>


            {/* TO DO: THEN I see a link to a downloadable resume and a list of the developer’s proficiencies */}
            </div>


        </div>

    )

}

export default Resume;