import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

import {
  Link, useMatch, useResolvedPath
} from 'react-router-dom';

// TODO: make it so the links in the nav bar are highlighted if at page
// TODO: make sure the page doesn't reload when click links

// ----------------------------stuff with tutor ----------------

//     <nav>
//     <ul> <Link to='/' styles={({isActive}) => ({
//   color: !isActive ? "green" : "blue"
// })}>About Me</Link></ul>
//     <ul> <Link to='/portfolio' styles={({isActive}) => ({
//   color: !isActive ? "green" : "blue"
// })}>Portfoilio</Link></ul>
//     <ul> <Link to='/contact'>Contact</Link></ul>
//     <ul> <Link to='/resume'>Resume</Link></ul>
//   </nav >


function Navigationbar() {


  return (
    <Navbar bg="light" expand="lg">
    <Row className="me-auto">
      <Container>
        <Navbar.Brand>Shep Sheperdigian</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container >
      <Navbar.Collapse id="basic-navbar-nav">
        <Container>
           <CustomLink to='/'>About Me</CustomLink>  
           <CustomLink to='/portfolio' styles={({isActive}) => ({color: !isActive ? "green" : "red"})}>Portfoilio</CustomLink>  
           <CustomLink to='/contact'>Contact</CustomLink>  
           <CustomLink to='/resume'>Resume</CustomLink>  
        </Container>
        </Navbar.Collapse>
          </Row>
    </Navbar>
  );
}

function CustomLink({to,children, props}){
  
  
  const resolvedPath = useResolvedPath(to) 
  const isActive =useMatch({ path: resolvedPath.pathname, end: true})
  return (

    <ul className ={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </ul>
  )
}

export default Navigationbar;




