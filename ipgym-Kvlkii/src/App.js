import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Features from './Components/Features';
import Featurebox from './Components/Featurebox';
import Offer from './Components/Offer';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Features/>
      <Featurebox/>
      <Offer/>  
      <About/>
      <Contact/>
        
       
    </div>
  );
}

export default App;
