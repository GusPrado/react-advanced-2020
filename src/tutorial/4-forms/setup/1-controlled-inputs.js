import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (firstName && email) {
      const person = {
        id: new Date().getTime().toString(),
        firstName,
        email
      }
      setPeople([
        ...people,
        person
      ])
      //same as above
      // setPeople((people) => {
      //   return [...people, person]
      // })
      setFirstName('')
      setEmail('')
    } else {
      alert('Fields cannot be empty!')
    }
  }
  return (
    <>
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name: </label>
          <input 
            type="text" 
            name="firstName" 
            id="firstName" 
            value={firstName}
            onChange={(evt) => setFirstName(evt.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail: </label>
          <input 
            type="email" 
            name="email" 
            id="email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </div>
        <button type="submit">Add person</button>
      </form>
      {
        people.map(person => {
          const {id,firstName,email} = person
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          )
        })
      }
    </article>
    </>
  )
};

export default ControlledInputs;
