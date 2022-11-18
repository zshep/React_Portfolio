import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  NavLink
} from 'react-router-dom';

// TODO: Create a styles object called "styles"

function Navigationbar() {
  

  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="/">Shep Sheperdigian</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="me-auto">
        <NavLink to='/' styles={({isActive}) => ({ color: !isActive ? "green" : "blue" })}>About Me</NavLink>
          <NavLink to='/portfolio' styles={({isActive}) => ({ color: !isActive ? "green" : "blue"})}>Portfoilio</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
         <NavLink to='/resume'>Resume</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
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