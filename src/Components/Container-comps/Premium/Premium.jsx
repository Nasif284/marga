import React from 'react'
import './premium.css'
import { premium } from '../../../Assets'
const Premium = () => {
  return (
    <div className='premium'>
      <div className='premium-first'>
        <img src={premium} alt="" />
        <h4>Go premium access</h4>
        <p>Explore 500+ Courses with life time membership.Learn more with marga.ai.</p>
      </div>
      <div className='premium-second'>
        <button className='button-premium'>Get access</button>
      </div>
    </div>
  )
}

export default Premium
