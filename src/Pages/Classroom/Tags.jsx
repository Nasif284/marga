import React from 'react'
import { tag_1, tag_2, tag_3 } from '../../Assets'

const Tags = () => {
  return (
    <div>
      <div className="class-tags">
        <div className='tag' style={{ background: "#f5f5fe" }}><img src={tag_1} alt="" />Hardware</div>
        <div className='tag' style={{ background: "#ffeed2" }}><img src={tag_2} alt="" />Trining</div>
        <div className='tag' style={{ background: "#e5ffeb" }}><img src={tag_3} alt="" />Important</div>
      </div>
    </div>
  )
}

export default Tags
