import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

const styles = {
    footer: {
        bottom:"0",
        witdh: "50%",
        backgroundColor: 'whitesmoke',
        position: 'relative',
        textAlign: '-webkit-center'
        

        
    },
    footerLinks: {
        textDecoration: 'none',
        textAlign: 'center',
        margin: "1vw",
        display: 'grid',
        gridTemplateColumns: "1fr 1fr",
        width: '50%'

    }

}


function Footer() {
    return (

        <footer style={styles.footer}>
           <div style={styles.footerLinks}> 
             
                <a href="https://github.com/zshep" >< BsGithub/>GitHub</a>
             
                <a href="https://www.linkedin.com/in/shep-sheperdigian-35b94523a/">< BsLinkedin/>LinkedIn</a>
             

            </div>
        </footer>


    );
}


export default Footer;