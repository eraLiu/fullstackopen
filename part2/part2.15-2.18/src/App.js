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
    const personsArray = persons.map(e => e.name)
    if (personsArray.includes(`${personObject.name}`)) {
      const oldPerson = persons.filter(e => e.name === newName)
      const _id = oldPerson.map(e => e.id)[0]
      const result = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      )
      if (result) {
        personService
          .update(_id, personObject)
          .then(returnedPerson => {
            setPersons(persons.map(person =>
              person.id === returnedPerson.id ? returnedPerson : person))

              alert(`Edited ${returnedPerson.name}`)

          })
          .catch(error => {
            alert(error.response.data.error)

          })
        setNewName('')
        setNewNumber('')
      }
    } else {
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