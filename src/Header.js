import React from 'react';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Header = () => {
  return (
    <div className='header-page'>
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
      <hr style={{ color: 'black' }}/>
      <div className='title-container'>
        <h1 className='title'>Alexander Jiw</h1>
        <h2>Third year computer science student</h2>
        <div className='icon-container'>
          <span className='icon'>
            <GitHubIcon fontSize='inherit'/>
          </span>
          <span className='icon'>
            <LinkedInIcon fontSize='inherit'/>
          </span>
          <span className='icon'>
            <EmailIcon fontSize='inherit'/>
          </span>
        </div>
        <Button variant="contained" size='large'>Discover Me</Button>
      </div>
    </div>
  )
}

export default Header