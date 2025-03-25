import React from 'react';

const About = () => {
  return (
    <div id='about-page' className='about-page'>
      <h1 className='about-me'>About Me</h1>
      <h2>Let me introduce myself.</h2>
      <div className='intro-info-container'>
        {/* <img className='profile-image' src='../public/blank-profile.jpg' alt=''></img> */}
        <p className='intro-info'>
          I am a third-year Computer Science sudent, preparing to enter my final year of study at UNSW. 
          Throughout my studies, I have developed a strong foundation in programming, algorithms and software 
          development with experiences in languages such as Python, Java, Javascript and C. Beyond academics, 
          I have worked on various projects to strengthen my problem-solving and teamwork skills. As I approach the
          final year of my undergraduate journey, I am eager to apply my knowledge and skills to real world 
          challenges and grow as a developer. 
        </p>
      </div>
      <br />
      <br />
      <h1 className='about-me'>Skills</h1>
    </div>
  )
}

export default About