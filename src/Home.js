import React from 'react';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Home = () => {
  const [id, setId] = React.useState('top')
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setId('bottom')
    } else {
      setId('top')
    }
  })

  return (
    <div className='header-page' >
      <div className='header' id={id}>
        <div className='list-container'>
          <li className='list' onClick={() => {window.scrollTo({ top: 0, behavior: 'smooth' })}}>
            Home
          </li>
          <li className='list' onClick={() => scroll('about-page')}>
            About
          </li>
          <li className='list' onClick={() => scroll('resume-page')}>
            Resume
          </li>
          <li className='list' onClick={() => scroll('project-page')}>
            Projects 
          </li>
          <li className='list' onClick={() => scroll('contact-page')}>
            Contacts 
          </li>
        </div>
        <hr />
      </div>
      <div className='title-container'>
        <h1 className='title'>Alexander Jiw</h1>
        <h2>Third year Computer Science Student</h2>
        <div className='icon-container'>
          <span className='icon'>
            <GitHubIcon fontSize='inherit' color='inherit' onClick={() => window.open("https://github.com/alexanderj03")}/>
          </span>
          <span className='icon'>
            <LinkedInIcon fontSize='inherit' color='inherit' onClick={() => window.open("https://www.linkedin.com/in/alexander-jiw-2a568822a/")}/>
          </span>
          <span className='icon'>
            <EmailIcon fontSize='inherit' color='inherit' onClick={() => scroll('contact-page')}/>
          </span>
        </div>
        <Button variant="contained"size='large' sx={btnStyle} onClick={() => scroll('about-page')}>Discover Me</Button>
      </div>
    </div>
  )
}

const btnStyle = {
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontWeight: 'bold',
  fontSize: '100%'
}

const scroll = (text) => {
  const element = document.getElementById(text)
  element.scrollIntoView({
    behavior: 'smooth'
  })
}

export default Home