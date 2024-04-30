import React from 'react'
import { classroom_1, classroom_2, classroom_3, settings } from '../../Assets'

const Menu = () => {
  return (
    <div>
      <div className="menu">
        <div className="first-menu">
          <button style={{ borderRadius: '8px 0 0 8px ' }}>All Classes</button>
          <button style={{ borderRadius: '0 8px 8px 0 ' }}>Drafts</button>
        </div>
        <div className="second-menu">
          <div>
            <button style={{ borderRadius: '8px 0 0 8px ' }} >< img src={classroom_1} alt="" /></button>
            <button style={{ borderRadius: '0 8px 8px 0 ' }} ><img src={classroom_2} alt="" /></button>
          </div>
          <button><img src={settings} alt="" />Filter</button>
          <button><img src={settings} alt="" />Settings</button>
          <button className='btn-blue'> <img style={{ width: "15px" }} src={classroom_3} alt="" /> Create New</button>
        </div>
      </div>
    </div>
  )
}

export default Menu
