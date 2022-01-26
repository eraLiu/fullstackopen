import React from 'react'
import personService from '../services/person'
const Person = ({ person, setPersons, persons, setMessage}) => {
  console.log(persons)
  const handleClick = () => {

    const result = window.confirm(`Delete ${person.name}`)
    if (result) {
        personService
            .remove(person.id)
            .then(response => {
                setPersons(persons.filter(item => item !== person))
                setMessage(`${person.name} has removed`)
                setTimeout(() => {
                  setMessage(null)
                }, 5000)

            })
            .catch((err) => {
                    setMessage(`[ERROR] ${person.name} was already removed from server`)
                    setTimeout(() => {
                      setMessage(null)
                    }, 5000)
            })
    }
  };
  return (
    
    <li>{person.name} {person.number} <button onClick={handleClick}>Delete</button></li>
  )
}


export default Person