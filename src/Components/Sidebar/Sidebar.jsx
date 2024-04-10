import React from 'react'
import './sidebar.css'
import { faq, link1, link2, link3, link4, link5, logo, search, settings, } from '../../Assets'
const Sidebar = () => {
  return (
    <div>
      <div class="sidebar-container">
        <div className="log">
          <img src={logo} alt="" />
        </div>
        <div className='links'>
          <div className='links1'>
            <a href=""><img src={link1} alt="" /></a>
            <img src={link2} alt="" />
            <img src={link3} alt="" />
            <img src={link4} alt="" />
          </div>

          <div className="links2">
            <img src={faq} alt="" />
            <img src={settings} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
