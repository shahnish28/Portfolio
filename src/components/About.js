import React, { Component } from 'react'
import aboutbg from "../img/aboutbg.jpg"

export default class About extends Component {
  render() {
    return (
      <div id="about">
        <img src={aboutbg} alt="bg" />
        <div className="itext">
          <h1>Who am I ?</h1>
          <h2>designer, thinker & innovator</h2>
        </div>
      </div>
    )
  }
}
