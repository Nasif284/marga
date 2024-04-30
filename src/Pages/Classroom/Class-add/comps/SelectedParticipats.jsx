import React from 'react'
import { cross } from '../../../../Assets'

const SelectedParticipats = ({ name, onRemove, getColor, index }) => {
  return (
    <div>
      <div className='selected' >
        <div style={{ backgroundColor: getColor(index) }}>{name.split(' ').map(n => n[0]).join('')}</div>
        {name}
        <img onClick={() => (onRemove(name))} src={cross} alt="" /></div>
    </div>
  )
}

export default SelectedParticipats
