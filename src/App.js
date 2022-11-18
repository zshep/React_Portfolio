import React from "react";

//importing components
//import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
//import {useState} from "react"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  //var [ben, setBen] = useState(false)

  return (
   
   <Router>
      <Header />
      
      <Routes>
        <Route exact path="/" element={ <About /> } />
     
        <Route exact path ='/portfolio' element={ <Portfolio />} />

        <Route exact path ='/contact' element={ <Contact />} />

        <Route exact path ='/resume' element={ <Resume />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;




//<button onClick={()=> {setBen(!ben)}}>{ben ? "light mode" : "dark Mode"}</button>