import React from 'react'
import './overview.css'
import { book, check, clock } from '../../../Assets'
const Overview = () => {
  return (
    <div className='overview'>
      <p className='head-text'>Overview</p>
      <div className="overview-box-container">
        <div className='box'>
          <img src={book} alt="" className="icon orange" />
          <div className='box-info'>
            <p className='num'>150</p>
            <p>Total Sessions</p>
          </div>
        </div>
        <div className='box'>
          <img src={check} alt="" className="icon green" />
          <div className='box-info'>
            <p className='num'>150</p>
            <p>Completed</p>
          </div>
        </div>
        <div className='box'>
          <img src={clock} alt="" className="icon blue" />

          <div className='box-info'>
            <p className='num'>124</p>
            <p>New enrolments</p>
          </div>
        </div>
        <div className='box'>
          <img src={clock} alt="" className="icon pink" />
          <div className='box-info'>
            <p className='num'>458 h 32 m 25 s</p>
            <p>Total watch time</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
