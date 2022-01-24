import React from 'react'
import personService from '../services/person'
const Person = ({ person, setPersons, persons}) => {
  console.log(persons)
  const handleClick = () => {
    const result = window.confirm(`Delete ${person.name}`)
    if (result) {
        personService
            .remove(person.id)
            .then(response => {
                setPersons(persons.filter(item => item !== person))
                alert(`${person.name} has removed`)

            })
            .catch((err) => {
                    alert(`${person.name} was already removed from server`)
            })
    }
  };
  return (
    
    <li>{person.name} {person.number} <button onClick={handleClick}>Delete</button></li>
  )
}


export default Person