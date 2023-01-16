import React from "react";
import Container from 'react-bootstrap/Container';
//importing components

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

// import router libraries from react-router
import {
  Routes,
  Route,
} from "react-router-dom";

const styles = {
  main: {
    display: "grid",
    width: "100%",
    height: "100%"
  }

}

function App() {
  
 
  return (
    
    <Container style={styles.main}>
      <Header />
        <br />
        <div>
          <Routes>
            <Route exact path="/" element={ <About /> } />
        
            <Route exact path ='/portfolio' element={ <Portfolio />} />

            <Route exact path ='/contact' element={ <Contact />} />

            <Route exact path ='/resume' element={ <Resume />} />

            <Route exact path ='*' element={ <About />} /> 
          </Routes>
        </div>
        <br />

      <Footer />
    
      </Container>
  );
}

export default App;




//<button onClick={()=> {setBen(!ben)}}>{ben ? "light mode" : "dark Mode"}</button>