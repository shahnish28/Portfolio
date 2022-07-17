import './App.css';
import  './Nav.css'
import  './About.css'
import  './Projects.css'
import  './Contact.css'
import  './Home.css'
import  './Popup.css'
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Popup from './components/Popup';
// import { useState } from "react";





function App() {
  

  return(
    <>
    <Navbar/>
    <Popup/>

      
    
    <Home/>
    <About />
    <Contact/>
    
    
    
    </>
  )
    
  }

export default App;
