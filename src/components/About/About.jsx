import React from 'react'
import './About.css'
import aboutimg from '../../assets/about.png'
import playicon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={aboutimg} alt="" className='about-img' />
        <img src={playicon} alt="" className='play-icon' />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
      </div>
    </div>
  )
}

export default About
