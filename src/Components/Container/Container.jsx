import React from 'react'
import './container.css'
import { Completed, Ongoing, Overview, PGraph, Performance, Premium } from '../Container-comps'
const Container = () => {
  return (
    <div className='container'>
      <Overview />
      <div className='graphs'>
        <Completed />
        <Performance />
      </div>
      <div className='third-row' >
        <Ongoing />
        <div className='inner-div'>
          <PGraph />
          <Premium />
        </div>
      </div>
    </div>
  )
}

export default Container
