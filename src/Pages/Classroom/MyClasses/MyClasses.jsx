import React, { useState } from 'react'
import { Header, Sidebar } from '../../../Components'
import './myClasses.css'
import { plus } from '../../../Assets'
import Menu from '../Menu'
import Card from '../Card'
import ClassAdd from '../Class-add/ClassAdd'
const MyClasses = () => {
  const [showClassAdd, setShowClassAdd] = useState(false);

  const toggleClassAdd = () => {
    setShowClassAdd(!showClassAdd);
  };
  return (
    <div className='cassroom'>
      <Sidebar />
      <Header heading='My Classroom' />
      <div className="classroom-container">
        <Menu />
        <Card />
        <div className="add-class">
          <h4>Add more class room</h4>
          <p>Need to add more more class room<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <button onClick={toggleClassAdd}><img src={plus} alt="" />Creat new </button>
        </div>
        {showClassAdd && <ClassAdd closeClassAdd={toggleClassAdd} />}
      </div>
    </div>
  )
}

export default MyClasses
