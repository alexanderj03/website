import React from 'react';

const Header = () => {
  return (
    <div className='header-page'>
      <ul className='list-container'>
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
      </ul>
      <hr style={{ color: 'black' }}/>
    </div>
  )
}

export default Header