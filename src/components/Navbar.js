import React from 'react';
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  NavLink
} from 'react-router-dom';

// TODO: make it so the links in the nav bar are highlighted if at page
// TODO: make sure the page doesn't reload when click links

function Navigationbar() {


  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Shep Sheperdigian</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container >
      <Navbar.Collapse id="basic-navbar-nav">
        <Container>
          <Row className="me-auto">
           <Col> <NavLink to='/'>About Me</NavLink> </Col> 
           <Col> <NavLink to='/portfolio'>Portfoilio</NavLink> </Col> 
           <Col> <NavLink to='/contact'>Contact</NavLink> </Col> 
           <Col> <NavLink to='/resume'>Resume</NavLink> </Col> 
          </Row>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigationbar;





// ----------------------------stuff with tutor ----------------

//     <nav>
//     <ul> <NavLink to='/' styles={({isActive}) => ({
//   color: !isActive ? "green" : "blue"
// })}>About Me</NavLink></ul>
//     <ul> <NavLink to='/portfolio' styles={({isActive}) => ({
//   color: !isActive ? "green" : "blue"
// })}>Portfoilio</NavLink></ul>
//     <ul> <NavLink to='/contact'>Contact</NavLink></ul>
//     <ul> <NavLink to='/resume'>Resume</NavLink></ul>
//   </nav >