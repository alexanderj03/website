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
    <div className='header-page'>
      <div className='header' id={id}>
        <div className='list-container'>
          <li className='list'>
            Home
          </li>
          <li className='list'>
            About
          </li>
          <li className='list'>
            Resume
          </li>
          <li className='list'>
            Projects 
          </li>
          <li className='list'>
            Contacts 
          </li>
        </div>
        <hr />
      </div>
      <div className='title-container'>
        <h1 className='title'>Alexander Jiw</h1>
        <h2>Third year computer science student</h2>
        <div className='icon-container'>
          <span className='icon'>
            <GitHubIcon fontSize='inherit' color='inherit' onClick={() => window.open("https://github.com/alexanderj03")}/>
          </span>
          <span className='icon'>
            <LinkedInIcon fontSize='inherit' color='inherit' onClick={() => window.open("https://www.linkedin.com/in/alexander-jiw-2a568822a/")}/>
          </span>
          <span className='icon'>
            <EmailIcon fontSize='inherit' color='inherit'/>
          </span>
        </div>
        <Button variant="contained"size='large' sx={btnStyle} onClick={() => scroll()}>Discover Me</Button>
      </div>
    </div>
  )
}

const btnStyle = {
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontWeight: 'bold',
  fontSize: '100%'
}

const scroll = () => {
  const element = document.getElementById('about-page')
  element.scrollIntoView({
    behavior: 'smooth'
  })
}

export default Home