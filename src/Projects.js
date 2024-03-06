import React from 'react';

const Projects = () => {
  return (
    <div className='project-page' id='project-page'>
      <div className='project-title'>
        <p className='project-text'>PORTFOLIO</p>
        <h1 className='personal-projects'>Personal Projects</h1>
        <h2 className='personal-projects'>Check out some of my creations.</h2>
      </div>
      <div className='project-container'>
        <div className='projects todo'>
          <div className='content'>
            Todo list website
          </div>
        </div>
        <div className='projects website'>
          <div className='content'>
            Personal website
          </div>
        </div>
        <div className='projects frontend'>
          <div className='content'>
            Airbnb website clone for practice
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects