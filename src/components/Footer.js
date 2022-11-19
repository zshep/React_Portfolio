import React from 'react';
import Container from 'react-bootstrap/esm/Container';

// TO DO: Make pretty

// creating the html for the footer
function Footer() {
    return(
        <div className='fixed-bottom'>
            <Container>
            <a href="https://github.com/zshep">GitHub</a>
            <br></br>
            <a href="https://www.linkedin.com/in/shep-sheperdigian-35b94523a/">LinkedIn</a>
            </Container>
        </div>

    );
}


export default Footer;