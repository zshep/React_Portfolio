import React from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
import NerdquizPhoto from './NKQpic.png';
import NTpic from './Notetakerpic.jpg';
import CQpic from './CQpic.jpeg';
import PWGpic from './PWGpic.jpg';
import Weatherpic from './Weatherpic.png';
import WLYDOpic from './WLYDOpic.png';
import GoModepic from './GoModepic.png';
import "./style.css"

const styles = {
    main: {
        display: 'flex',
        flexWrap: 'wrap'

    },
    card: {
        width: '50%',
    },
    cardTop: {
        height: '80%'

    },
    cardBottom: {
        height: 'auto'

    },
}

function Portfolio() {

    return (
        <Container style={styles.main}>
            <Card style={styles.card}>
                <Card.Body style={styles.cardTop}>
                    <Card.Title>Whole Let the Dawg Out</Card.Title>
                    <Card.Img variant="top" src={WLYDOpic} alt ="picture of Who Let your Dawg Out app" />
                </Card.Body>

                <Card.Body style={styles.cardBottom}>
                    <Card.Link href="https://sobe1290.github.io/wholetmydaWgout/">Deployed App Link</Card.Link>
                    <Card.Link href="https://github.com/sobe1290/wholetmydaWgout">GitHub Repo Link</Card.Link>
                </Card.Body>
            </Card>
           
            <Card style={styles.card}>
                <Card.Body style={styles.cardTop}>
                    <Card.Title>Nerd Knowledge Quiz</Card.Title>
                    <Card.Img variant="top" src={NerdquizPhoto} alt="picture of Nerd Quiz App" />
                </Card.Body>

                <Card.Body style={styles.cardBottom}>
                    <Card.Link href="https://enigmatic-river-65357.herokuapp.com/">Deployed App Link</Card.Link>
                    <Card.Link href="https://github.com/zshep/Nerd_Quiz">GitHub Repo Link</Card.Link>
                </Card.Body>
            </Card>
           
            <Card style={styles.card}>
                <Card.Body style={styles.cardTop}>
                    <Card.Title>Go Mode</Card.Title>
                    <Card.Img variant="top" src= {GoModepic} />
                </Card.Body>

                <Card.Body style={styles.cardBottom}>
                    <Card.Link href="https://gomodez.herokuapp.com/">Deployed App Link</Card.Link>
                    <Card.Link href="https://github.com/zshep/Fortress_of_Solitude">GitHub Repo Link</Card.Link>
                </Card.Body>
            </Card>

            <Card style={styles.card}>
                <Card.Body style={styles.cardTop}>
                    <Card.Title>Note Taker</Card.Title>
                    <Card.Img variant="top" src={NTpic} />
                </Card.Body>

                <Card.Body style={styles.cardBottom}>
                    <Card.Link href="https://damp-citadel-49094.herokuapp.com/">Deployed App Link</Card.Link>
                    <Card.Link href="https://github.com/zshep/Note-taker">GitHub Repo Link</Card.Link>
                </Card.Body>
            </Card>

            <Card style={styles.card}>
                <Card.Body style={styles.cardTop}>
                    <Card.Title>Weather App</Card.Title>
                    <Card.Img variant="top" src={Weatherpic}  />
                </Card.Body>

                <Card.Body style={styles.cardBottom}>
                    <Card.Link href="https://zshep.github.io/weather_app/">Deployed App Link</Card.Link>
                    <Card.Link href="https://github.com/zshep/weather_app">GitHub Repo Link</Card.Link>    
                </Card.Body>
            </Card>

            <Card style={styles.card}>
                <Card.Body style={styles.cardTop}>
                    <Card.Title>Password Generator</Card.Title>
                    <Card.Img variant="top" src={PWGpic}  />
                    
                </Card.Body>

                <Card.Body style={styles.cardBottom}>
                    <Card.Link href="https://zshep.github.io/password_generator/">Deployed App Link</Card.Link>
                    <Card.Link href="https://github.com/zshep/password_generator">GitHub Repo Link</Card.Link>
                </Card.Body>
            </Card>
                       
        
        </Container>
    )
}

export default Portfolio;







