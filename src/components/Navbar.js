import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import {
  NavLink

} from 'react-router-dom';

// TODO: Create a styles object called "styles"

function Navbar() {
  var styles = {
    frank: {
      backgroundColor: "red",
      color: "blue"
    }
  }
  // TODO: Add a style attribute to `nav`
  return (
    <nav className="navbar">

      <ul> <NavLink to='/' styles={({isActive}) => ({
    color: !isActive ? "green" : "blue"
  })}>About Me</NavLink></ul>
      <ul> <NavLink to='/portfolio' styles={({isActive}) => ({
    color: !isActive ? "green" : "blue"
  })}>Portfoilio</NavLink></ul>
      <ul> <NavLink to='/contact'>Contact</NavLink></ul>
      <ul> <NavLink to='/resume'>Resume</NavLink></ul>
    </nav >
  );
}

export default Navbar;