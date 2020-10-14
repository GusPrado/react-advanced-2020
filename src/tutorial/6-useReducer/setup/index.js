import React, { useState, useReducer } from 'react';
import { reducer } from './reducer'
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
// Control the state thru dispatch actions and
// only at reducer the state is treated
// * centralization point
// * always preserve the last state value when comes to here

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: ''
}

const Index = () => {
  const [name,setName] = useState('')
  const [state,dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (name) {
      const newItem = {
        id: new Date().getTime().toString(),
        name
      }
      dispatch({type: 'ADD_ITEM', payload: newItem})
      setName('')
    } else {
      dispatch({type: 'NO_VALUE'})
      //dispatch({type: 'CAUSE-ERROR'})
    }
  }

  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'})
  }
  
  return (
    <>
    {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
    <form onSubmit={handleSubmit} className="form">
      <div>
        <input type="text" value={name} onChange={(evt) => setName(evt.target.value)} />
      </div>
      <button type="submit">Add</button>
    </form>
    {
      state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button onClick={() => {dispatch(
              {type: 'REMOVE_ITEM', payload: person.id})}}
            >Remove
            </button>
          </div>
        )
      })
    }
    </>
  )
};

export default Index;
