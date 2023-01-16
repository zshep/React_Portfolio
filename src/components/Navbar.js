import React, { useState } from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import "./style.css"
import {
  NavLink
} from 'react-router-dom';



const styles = {
  navLink: {
    textDecoration: 'none',
    height: '100%',
    display: "flex",
    alignItems: "center"

  },
  activeStyle: {
    color: 'white',
    background: 'gray',
    maxHeight: "100%",
    textDecoration: 'none',
    marginTop: 0,

  },
  non: {
    color: "black",
    textDecoration: 'none'
  },
  nameBanner: {
    marginRight: 0,
    marginLeft: "2vw" 
  },
  navContent: {
    //alignItems: "stretch",
    height: "100%",
    marginRight: "2vw",
    alignItems: "stretch",
    whiteSpace: "nowrap"
  },
  content: {
    height: '100%',
    display: "flex",
    alignItems: "center"
  }
}
function Navigationbar() {
  //const[active, setActive] =useState(false);

  return (
    <>
      <Navbar bg="light" expand="md">
        <Col xs={12} md={8}>
          <Navbar.Brand style ={styles.nameBanner}>Shep Sheperdigian</Navbar.Brand>
          
        </Col >
       
        <Col className='justify-content-end' style ={styles.navContent}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse >
            <Nav className='me-auto'>
              <CustomLink to='/'>About Me</CustomLink>
              <CustomLink to='/portfolio'>Portfoilio</CustomLink>
              <CustomLink to='/contact'>Contact</CustomLink>
              <CustomLink to='/resume'>Resume</CustomLink>
    
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Navbar>
    </>
  );
}


function CustomLink({ to, children, props }) {
  
  
  return (
    // style={sectionStyle}
    <ul>
      <NavLink style={({isActive}) => { return isActive ? styles.activeStyle : styles.non }} to={to} {...props} end>
        {children}
      </NavLink>
    </ul>
  )
}

export default Navigationbar;




