import React from "react";
import Container from 'react-bootstrap/Container';
//importing components

import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Navigationbar from './components/Navbar';

// import router libraries from react-router
import {
  Routes,
  Route,
} from "react-router-dom";

const styles = {
  main: {
    display:"grid",
    width: "100%",
    height: "100%",
    alignItems: "stretch",
    

  }

}

function App() {
  
 
  return (
    
    <Container style={styles.main}>
      <Navigationbar />
        <br />
        
          <Routes>
            <Route exact path="/" element={ <About /> } />
        
            <Route exact path ='/portfolio' element={ <Portfolio />} />

            <Route exact path ='/contact' element={ <Contact />} />

            <Route exact path ='/resume' element={ <Resume />} />

            <Route exact path ='*' element={ <About />} /> 
          </Routes>
       
        <br />

      <Footer />
    
    </Container>
  );
}

export default App;




//<button onClick={()=> {setBen(!ben)}}>{ben ? "light mode" : "dark Mode"}</button>