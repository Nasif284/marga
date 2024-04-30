import React, { useState } from 'react'
import { select, tag_1, tag_2, tag_3 } from '../../../../Assets';
import Selected from './SelectedTag'

const ClassAddForm = ({ closeClassAdd, setFormFirst }) => {

  const [selected, setSelected] = useState([])
  const [dropdown, setDropdown] = useState(false)
  const tags = [
    { name: 'Hardware', image: tag_1, bg: '#f5f5fe' },
    { name: 'Trining', image: tag_2, bg: "#ffeed2" },
    { name: 'Important', image: tag_3, bg: "#e5ffeb" },
  ];


  const handleTagClick = (tag) => {
    const isTagAlreadySelected = selected.some(selectedTag => selectedTag.name === tag.name);

    if (!isTagAlreadySelected) {
      setSelected([...selected, tag]);
    }
  };
  const onRemove = (tagName) => (
    setSelected(selected.filter(tag => tag.name !== tagName))
  )

  return (
    <div>
      <div className='class-add-form'>
        <form action="">
          <div>
            <label htmlFor="">Classs room name</label>
            <input type="text" />
          </div>

          <div>
            <label htmlFor="">Description</label>
            <textarea name="" id="" cols="20" rows="3"></textarea>
          </div>

          <div className='select'>
            <label htmlFor="">Add Tags</label>

            <div className='select-btn'>
              {selected.length === 0 && <span>Select</span>}
              <div className='selected-tags'>
                {selected.map((i) => (
                  <Selected name={i.name}
                    tag={i.image}
                    bg={i.bg}
                    onRemove={onRemove} />
                ))}
              </div>
              <img onClick={() => (setDropdown(!dropdown))} className='select-arrow' src={select} alt="" />
            </div>

            {dropdown &&
              <ul className='options'>
                {tags.map((tag) => (
                  <li onClick={() => handleTagClick(tag)} ><img src={tag.image} alt="" />{tag.name}</li>
                ))}
              </ul>}
          </div>

          <div className="form-btn">
            <button onClick={closeClassAdd} >Cancel</button>
            <button onClick={() => { setFormFirst(false); }}>Add Participants</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ClassAddForm
