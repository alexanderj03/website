import React from 'react';

const About = () => {
  return (
    <div id='about-page' className='about-page'>
      <h3 className='about-me'>About Me</h3>
      <h2>Let me introduce myself.</h2>
      <div className='intro-info-container'>
        <img className='profile-image' src='../public/blank-profile.jpg' alt=''></img>
        <p className='intro-info'>
          I'm a third year student computer science student currently studying at UNSW. 
          My primary interests within the field are front-end development and artificial intelligence.
          As I approach the final years of my undergraduate journey, I'm eager to learn real-life skills and 
          create an impact towards the computer science field. 
        </p>
      </div>
    </div>
  )
}

export default About