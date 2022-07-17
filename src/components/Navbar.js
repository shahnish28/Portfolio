import React from 'react'
import logo from "../img/logo.jpg"
import { useState } from "react"
import Popup from './Popup';


export default function Navbar(props){
    
  const [buttonPopup,setButtonPopup] = useState(false);
  return (
    <div className="nav">

      <div className="img">
        <img src={logo} alt="" />
      </div>

      <div className="ul">
        <ul>
          <li><a href="#home" title='home page'>Home</a></li>
          <li><a href="#about" title='about us'>About</a></li>
          <li><a href="#projects" title='our projects'>Projects</a></li>
          <li><a href="#contact" title='contact us'>Contact</a></li>
        </ul>
      </div>

      <div className="hire">
        <button onClick={() => setButtonPopup(true)}>hire me</button>

      </div>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <form action="/">
          <label htmlFor="Cname">Company's Name: </label>
          <input type="text" id="Cname" name="Cname"   placeholder='xyz'/><br/><br/>
          <label htmlFor="Email">Email address: </label>
          <input type="text" id="Email" name="Email"  placeholder='abc@gmail.com'/><br/><br/>
          <label htmlFor="Wtype">Work type: </label>
          <input type="text" id="Wtype" name="Wtype"  placeholder='full-time/intern'/><br/><br/>
          <button className="sub">submit</button>
        </form> 
      </Popup>

    </div>
  )
}

    

