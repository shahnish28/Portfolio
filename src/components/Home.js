import React, { Component } from 'react'
import homebg from "../img/homebg2.png"
// import sign from "../img/Vector1.svg"


export class Home extends Component {
  render() {
    
    return (
        <>
        <div id="home">
          <div className="home">
            <div className="intro">
               <div className="heading">
               
                  <svg width="200" height="160" viewBox="0 0 44 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className='sign'>
                  <rect width="44" height="18" fill="#F5F5F5"/>
                  <g id="Desktop - 1">
                  <rect width="1440" height="1024" transform="translate(-511 -466)" fill="black"/>
                  
                  <path id="Vector 1" d="M0.5 13.5V5.5L7.5 13.5V5.5L8.5 14L9.5 15H10.5M10.5 15V9M10.5 15L16.5 9L14 8H12V9V10H13L16.5 10.5V12.5L15.5 13L14 13.5L12 12L18 6.5V13.5L19 10.5H21.5L22 11.5V13.5L22.5 13M26.5 12H25L22.5 10.5L23.5 9.5L25.5 10L22.5 13M26.5 12L26 13.5L25 14H23.5L22.5 13M26.5 12L28 6.5V14L29 10.5H30H31V11.5V13V14L31.75 12.25M31.75 12.25L32.5 10.5H34L35 11.5L35.5 12.5V13.5L34 14L32.5 13.5L31.75 12.25ZM36 13.5H36.5V11.5V10.5M36.5 6.5V10.5M36.5 10.5L38.5 10L39 10.5L39.5 12.25V13.5H41.5M41.5 13.5L43 12.25V10L42 4.5L40.5 2.5L38.5 1L35 0.5H32.5L17.5 6.5L9.5 16.5L41 16L41.5 13.5ZM10.5 7.5H10" stroke="white"/>
                  </g>
                  
                  </svg>
               </div>

               <div className="subh">
                  <h1>the odysse of a front-end web developer </h1> 
               </div>

                
            </div>
            <div className="bg">
              <img src={homebg} alt="homebg" />
            </div>
          </div>
        </div>

        
        <div className="sep">
          <i className = "fa-solid fa-display"></i>
        </div>
        
          
  
        </>
    )
  }
}

export default Home
                  
               

             

              
