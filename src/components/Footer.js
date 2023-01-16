import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

const styles = {
    footer: {
        bottom:"0",
        margin: "auto",
        witdh: "50%",
        background: 'dark'

        
    },
    footerLinks: {
        textDecoration: 'none',
        background: 'light',
        textAlign: 'center'

    }

}


function Footer() {
    return (

        <footer style={styles.footer}>
           <div style={styles.footerLinks}> 
             <div>
                <a href="https://github.com/zshep">< BsGithub/>GitHub</a>
                <br></br>
             </div>
              <div>
                <a href="https://www.linkedin.com/in/shep-sheperdigian-35b94523a/">< BsLinkedin/>LinkedIn</a>
              </div>

            </div>
        </footer>


    );
}


export default Footer;