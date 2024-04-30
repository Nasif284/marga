import React from 'react'
import './ongoing.css'
import { arrow, date, filter, thump } from '../../../Assets'
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
const Ongoing = () => {
  return (
    <div className='on-going'>
      <div className="head">
        <div>
          <p>On going classes</p>
        </div>
        <div className="controles">
          <div className="week">
            <img className='date' src={date} alt="" />
            <div><p>This week</p></div>
            <img className='arrow' src={arrow} alt="" />
          </div>

          <div className="filter">
            <img src={filter} alt="" />
            <div><p>Filter</p></div>
          </div>
        </div>
      </div>
      <table className="fl-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Total Attendies</th>
            <th>Avg Time</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='img-td'><div  style={{backgroundImage:`url(${thump})`}} className="thump"></div>The Complete 2024 Web Develop...</td>
            <td>50</td>
            <td>5-10 Min</td>
            <td >
              <div className='circle-td'>
                <div className='circle'>
                  <CircularProgressbar strokeWidth={15} value={60} maxValue={100} />
                </div>
                <p>60%</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className='img-td'><img className='thump' src={thump} alt="" />The Complete 2024 Web Develop...</td>
            <td>50</td>
            <td>5-10 Min</td>
            <td>
              <div className='circle-td'>
                <div className='circle'>
                  <CircularProgressbar strokeWidth={15} value={60} maxValue={100} />
                </div>
                <p>60%</p>
              </div>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Ongoing
