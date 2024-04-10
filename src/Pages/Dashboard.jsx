import React from 'react'
import './dashboard.css'
import { Sidebar,Header,Container } from '../Components'
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Sidebar/>
      <div className='main'>
      <Header/>
      <Container/>
      </div>     
    </div>
  )
}

export default Dashboard
