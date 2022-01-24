import React, { useState , useEffect} from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/person'
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  useEffect(() => {
    personService
      .getAll()
      .then(initialpersons => {
      setPersons(initialpersons)
      })
  }, [])
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
  
      personService
      .create(personObject)
        .then(returnedNote => {
      setPersons(persons.concat(returnedNote))
      setNewName('')
      setNewNumber('')
    })

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
        title='filter shown with filtername:'
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
        <Persons persons={persons} filtername={filterName} setPersons={setPersons}/>
        
      </ul>
      </div>
    </div>
  )
}

export default App