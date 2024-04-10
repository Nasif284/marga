import React from 'react'
import './header.css'
import { profileImg, search } from '../../Assets'
const Header = () => {
  return (
    <div className='header'>
      <div className='heading'>
        <p>Dashboard</p>
      </div>
      <div className='search-profile'>
        <div className='search'>
          <img src={search} alt="" />
          <input type="text" placeholder='Search in marga' />
        </div>
        <div className='profile'>
          <img src={profileImg} alt="" />
          <div className="prof-info">
            <p className='name'>John Doe</p>
            <p className='email'>email@gmail.com</p>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Header
