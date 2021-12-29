import React, { useState } from 'react'
import Person from './components/Person'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' ,
    id: 1}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      date: new Date().toISOString(),
      id: persons.length + 1,
      number:newNumber

    }
    persons.some((p) => p.name === newName) ?
      alert(`${newName} is already added to phonebook`)
      :setPersons(persons.concat(personObject))
    
    setNewName('')
    setNewNumber('')
  }
  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input 
                  value={newNumber}
                  onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div> 
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person key={person.id} person={person} />
        )}
      </ul>
      </div>
    </div>
  )
}

export default App