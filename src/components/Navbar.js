import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames


// TODO: Create a styles object called "styles"

function Navbar() {
  // TODO: Add a style attribute to `nav`
  return (
    <nav className="navbar">
    
        <ul> About Me</ul>
        <ul> Portfolio</ul>
        <ul> Contact</ul>
        <ul> Resume </ul>
    </nav>
  );
}

export default Navbar;