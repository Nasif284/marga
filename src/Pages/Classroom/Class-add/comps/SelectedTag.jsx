import React from 'react'
import { cross } from '../../../../Assets'

const SelectedTag = ({ name, tag, bg, onRemove }) => {
  return (
    <div>
      <div className='selected' style={{ background: bg }}><img src={tag} alt="" />{name} <img onClick={() => (onRemove(name))} src={cross} alt="" /></div>
    </div>
  )
}

export default SelectedTag
