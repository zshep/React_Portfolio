import React from "react";

//importing components
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
    <div>
    <Navbar />
    <Header />
    {/* middle container that will hold main content */}
    <div className="main">
    <h1>Does this show up with everything else?</h1>

    </div>
    <Footer />
  </div>
  );
}

export default App;
