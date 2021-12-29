import React, { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
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
    // console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilterName(event.target.value)
  }
  

  return (
    <div>
      <div>
      <h2>Phonebook</h2>
        <Filter 
        title='filter shown with'
        name={filterName} 
        handleFilterChange={handleFilterChange}/>
      </div>
      <div>
      <h2>Add a new</h2>
      <PersonForm 
      newName={newName} 
      newNumber ={newNumber}
      handleNameChange={handleNameChange}
      handleNumberChange={handleNumberChange}
      addPerson={addPerson}
      />
        </div>

      <div> 
      <h2>Numbers</h2>
      <ul>
        <Persons persons={persons} filtername={filterName} />
        
      </ul>
      </div>
    </div>
  )
}

export default App