import React, { useState } from 'react'
import { down_arrow, search_1 } from '../../../../Assets'
import SelectedParticipats from './SelectedParticipats';

const AddParticipants = ({ closeClassAdd, setFormFirst }) => {
  const [selected, setSelected] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAlphabet, setSelectedAlphabet] = useState(null);
  const participants = [
    { name: 'Amal John', email: "vishnusai@email.com" },
    { name: 'Angel Mathews', email: "Angel Mathews@email.com" },
    { name: 'Amal Dohn', email: "vishnusai@email.com" },
    { name: 'Angel Kathews', email: "Angel Mathews@email.com" },
    { name: 'Hngel Kathews', email: "Angel Mathews@email.com" },
    { name: 'Angel Fathews', email: "Angel Mathews@email.com" },
    { name: 'Amal John', email: "vishnusai@email.com" },
    { name: 'Angel Mathews', email: "Angel Mathews@email.com" },
    { name: 'Amal Dohn', email: "vishnusai@email.com" },
    { name: 'Angel Kathews', email: "Angel Mathews@email.com" },
    { name: 'Hngel Kathews', email: "Angel Mathews@email.com" },
    { name: 'Angel Fathews', email: "Angel Mathews@email.com" },
    { name: 'Amal John', email: "vishnusai@email.com" },
    { name: 'Angel Mathews', email: "Angel Mathews@email.com" },
    { name: 'Amal Dohn', email: "vishnusai@email.com" },
    { name: 'Angel Kathews', email: "Angel Mathews@email.com" },
    { name: 'Hngel Kathews', email: "Angel Mathews@email.com" },
    { name: 'Angel Fathews', email: "Angel Mathews@email.com" }
  ]
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const colors = ['#790334', '#007ACC', '#FFD700', '#FF8C00', '#4B0082'];

  // Functions
  const filteredParticipants = participants.filter(participant => {
    return (selectedAlphabet ? participant.name.startsWith(selectedAlphabet) : true) &&
      (participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        participant.email.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  const handleAlphabetClick = (alphabet) => {
    setSelectedAlphabet(alphabet);
  };

  const onRemove = (partName) => (
    setSelected(selected.filter(participant => participant.name !== partName))
  )
  const getColor = (index) => {
    return colors[index % colors.length];
  };

  const handleTagClick = (participant) => {
    const isParticipantAlreadySelected = selected.some(selectedParticipant => selectedParticipant.name === participant.name);

    if (!isParticipantAlreadySelected) {
      setSelected([...selected, participant]);
    }
  };

  return (
    <div className="add-participants">

      {selected.length > 0 && <h4>Added participants</h4>}

      <div className="selected-partcipants">
        {selected.map((i, index) => (
          <SelectedParticipats
            name={i.name}
            onRemove={onRemove}
            getColor={getColor}
            index={index}
          />
        ))}
      </div>

      <h4>All Participants</h4>
      <div className="search-box">
        <img src={search_1} alt="" />
        <input
          placeholder='Search participants'
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="btns">
        <button>Category <img src={down_arrow} alt="" /></button>
        <button>Class <img src={down_arrow} alt="" /></button>
        <button>Tags <img src={down_arrow} alt="" /></button>
      </div>

      <div className='participants-container'>
        <div className="participant">
          {filteredParticipants.map((participant, index) => (
            <div onClick={() => handleTagClick(participant)} key={index} className="participant-info">
              <div style={{ backgroundColor: getColor(index) }}>{participant.name.split(' ').map(n => n[0]).join('')}</div>
              <div>
                <p>{participant.name}</p>
                <p>{participant.email}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='alphabet-container'>
          {alphabets.map((alphabet, index) => (
            <div key={index} className="alphabet" onClick={() => handleAlphabetClick(alphabet)}>
              {alphabet}
            </div>
          ))}
        </div>

      </div>

      <div className="add-participant-footer">
        <div className="btn1">
          <button onClick={() => {
            setFormFirst(true);
          }}>Back</button>
        </div>

        <div className="btn2">
          <button onClick={closeClassAdd}>Cancel</button>
          <button>Finish</button>
        </div>
      </div>
    </div>
  );
};
export default AddParticipants
