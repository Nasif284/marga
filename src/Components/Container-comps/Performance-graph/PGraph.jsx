import React from 'react'
import './pGraph.css'
import { arrow, date } from '../../../Assets'
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import RadialSeparators from "./RadialSeparators";
const PGraph = () => {
  return (
    <div className='pGraph'>
      <div className="head">
        <div>
          <p>Performance</p>
        </div>
        <div className="controle">
          <img className='date' src={date} alt="" />
          <div><p>Today</p></div>
          <img className='arrow' src={arrow} alt="" />
        </div>
      </div>
      <div className='graph-container'>
        <div className="perfo-circular-graph">
          <CircularProgressbarWithChildren

            value={80}
            strokeWidth={10}
            circleRatio={0.75}
            styles={buildStyles({
              rotation: 1 / 2 + 1 / 8,
              strokeLinecap: "butt",
              pathColor: '#696cff',
              trailColor: "transparent"
            })}
          >
            <div className='value-text'>
              <p>183</p>
              <span>Out of 250</span>
            </div>
            <RadialSeparators
              count={35}
              style={{
                background: "#fff",
                width: "8px",
                height: `${10}%`
              }}
            />
          </CircularProgressbarWithChildren>
        </div>
      </div>
      <div className='graph-info'>
        <div>
          <span className='circle-1'></span>
          <p>Completed Sessions</p>
        </div>
        <div>
          <span className='circle-2'></span>
          <p>Total sessions</p>
        </div>

      </div>
    </div>
  )
}

export default PGraph
