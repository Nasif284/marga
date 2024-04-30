import React from 'react'
import { card_img, eye, pen, prof1, prof2, prof3 } from '../../Assets'
import Tags from './Tags'

const Card = () => {
  return (
    <div className='class-card-container'>
      <div className='class-card'>
        <div className='card-img' style={{ backgroundImage: `url(${card_img})` }}></div>
        <div className="card-info">
          <p className='info-mini-head'>Classrom 1</p>
          <h4 className='info-head'>Basics of hardware installations</h4>
          <p className='info-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        </div>
        <Tags />
        <div className="participants">
          <div className='imgs'>
            <div style={{ backgroundImage: `url(${prof1})` }}></div>
            <div style={{ backgroundImage: `url(${prof2})` }}></div>
            <div style={{ backgroundImage: `url(${prof3})` }}></div>
          </div>
          <p>150 Participants</p>
        </div>
        <span></span>
        <div className="card-footer">
          <div className="pen">
            <img src={pen} alt="" />
          </div>
          <div className="details">
            <img src={eye} alt="" />
            View details
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
