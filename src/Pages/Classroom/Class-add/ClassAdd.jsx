import React, { useState } from 'react'
import './classAdd.css'
import { form_faq, form_head } from '../../../Assets'
import ClassAddForm from './comps/ClassAddForm'
import AddParticipants from './comps/AddParticipants'

const ClassAdd = ({ closeClassAdd }) => {
  const [formFirst, setFormFirst] = useState(true)

  return (
    <div className='class-add'>
      <div className="class-add-form-container">
        <div className='form-header'>
          <div className='form-header-1'>
            <img src={form_head} alt="" />
            <div>
              <p>Create new class room</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
          </div>

          <div className='form-header-2'>
            <img src={form_faq} alt="" />
            <p>Know more about <a href="">create class room</a></p>
          </div>
        </div>

        {formFirst && <ClassAddForm closeClassAdd={closeClassAdd} setFormFirst={setFormFirst} />}
        {!formFirst && <AddParticipants closeClassAdd={closeClassAdd} setFormFirst={setFormFirst} />}
        
      </div>
    </div>
  )
}

export default ClassAdd
