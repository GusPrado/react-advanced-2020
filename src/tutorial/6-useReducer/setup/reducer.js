export const reducer = (state, action) => {
  // console.log(state, action)
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload]
    //must always return the state
    return {...state, 
      people:newPeople, 
      isModalOpen: true, 
      modalContent: 'item added'} 
  }
  if (action.type === 'NO_VALUE') {
    return {...state,isModalOpen:true,modalContent: 'please enter some value'}
  }

  if (action.type === 'CLOSE_MODAL') {
    return {...state, isModalOpen: false}
  }

  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter((person) => 
    person.id !== action.payload)
    return {...state, people: newPeople}
  }
  //return state <- must always return the state
  throw new Error('no matching action type') // capture invalid action type
}

