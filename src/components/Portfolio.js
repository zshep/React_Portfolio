import React from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
import NerdquizPhoto from './NKQpic.png';
import NTpic from './Notetakerpic.jpg';
import CQpic from './CQpic.jpeg';
import PWGpic from './PWGpic.jpg';
import Weatherpic from './Weatherpic.png';
import WLYDOpic from './WLYDOpic.png';


function Portfolio() {

    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={WLYDOpic} alt ="" />
                <Card.Body>
                    <Card.Title>Whole Let the Dawg Out</Card.Title>
                    
                </Card.Body>

                <Card.Body>
                    <Card.Link href="#">Deployed App Link</Card.Link>
                    <Card.Link href="#">GitHub Repo Link</Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={NerdquizPhoto} alt="picture of Nerd Quiz App" />
                <Card.Body>
                    <Card.Title>Nerd Knowledge Quiz</Card.Title>
                </Card.Body>

                <Card.Body>
                    <Card.Link href="#">Deployed App Link</Card.Link>
                    <Card.Link href="#">GitHub Repo Link</Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {CQpic} />
                <Card.Body>
                    <Card.Title>Coding Quiz</Card.Title>
                </Card.Body>

                <Card.Body>
                    <Card.Link href="#">Deployed App Link</Card.Link>
                    <Card.Link href="#">GitHub Repo Link</Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Back End NoSQL Database</Card.Title>
                </Card.Body>

                <Card.Body>
                    <Card.Link href="#">Deployed App Link</Card.Link>
                    <Card.Link href="#">GitHub Repo Link</Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Back End NoSQL Database</Card.Title>
                </Card.Body>

                <Card.Body>
                    <Card.Link href="#">Deployed App Link</Card.Link>
                    <Card.Link href="#">GitHub Repo Link</Card.Link>    
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Back End NoSQL Database</Card.Title>
                    
                </Card.Body>

                <Card.Body>
                    <Card.Link href="#">Deployed App Link</Card.Link>
                    <Card.Link href="#">GitHub Repo Link</Card.Link>
                </Card.Body>
            </Card>
        
        
        
        
        </Container>
    )
}

export default Portfolio;







