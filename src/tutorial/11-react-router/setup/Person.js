import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  // console.log(useParams())
  const [name, setName] = useState('Nobody')
  const {id} = useParams()

  useEffect(() => {
      const newPerson = data.find((person) => person.id === Number(id))
      setName(newPerson.name)
  },[id])

  return (
    <div>
      <h1>{name}</h1>
      <Link to="/people" className="btn">
        Back to people
      </Link>
    </div>
  );
};

export default Person;
