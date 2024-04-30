import React from 'react'
import './class.css'
import { Progress } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { Header, Sidebar } from '../../../Components'
import { card_img, prof1, prof2, prof3 } from '../../../Assets'

const Class = () => {
  return (
    <div className='Class'>
      <Sidebar />
      <Header heading='My Classroom' />
      <div className="classroom-container">
        <div className="nav">
          <a href="">Home <span>|</span></a>
          <a href="">My Classes <span>|</span></a>
          <a href="">Class 1 <span>|</span></a>
          <a href="">Basics of installations</a>
        </div>
        <div className='class-info'>
          <div className='info-img' style={{ backgroundImage: `url(${card_img})` }}></div>
          <div className='info-description'>
            <p>Class 1</p>
            <h4>Basics of hardware installations</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
          </div>
        </div>
        <div className='class-btns'>
          <button active className='active' >On going sessions</button>
          <button>Scheduled sessions</button>
          <button>Drafts</button>
        </div>
        <div className='class-card-container'>
          <div className='class-card'>
            <div className='card-img' style={{ backgroundImage: `url(${card_img})` }}></div>
            <div className="card-info">
              <h4 className='info-head'>Basics of hardware installations</h4>
              <p className='info-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
            <div className="participants">
              <div className='imgs'>
                <div style={{ backgroundImage: `url(${prof1})` }}></div>
                <div style={{ backgroundImage: `url(${prof2})` }}></div>
                <div style={{ backgroundImage: `url(${prof3})` }}></div>
              </div>
              <p>150 Participants</p>
            </div>
            <div className="start-end">
              <div className="start">
                <p>Starts at</p>
                <p>25 feb 2024, 10:30 AM</p>
              </div>
              <div className="end">
                <p>Ends at</p>
                <p>25 feb 2024, 10:30 AM</p>
              </div>
            </div>
            <div className="progress-bar">
              <Progress.Line percent={30} strokeColor="#84be70" showInfo={false} strokeWidth={5} />
            </div>
            <div className="card-footer">
              <button>Abort Class</button>
              <button>View class status</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Class
