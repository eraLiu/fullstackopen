import React, { useState , useEffect} from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/person'
import './index.css'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [Message, setMessage] = useState('')
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
      id: persons.length+Math.round(10*Math.random()*persons.lengt),
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
              setMessage(
                `Edited ${returnedPerson.name}`
              )
              setTimeout(() => {
                setMessage(null)
              }, 5000)
        


          })
        setNewName('')
        setNewNumber('')
      }
    } else {
    persons.some((p) => p.name === newName) ?
      setMessage(`[ERROR] ${newName} is already added to phonebook`)
      :setPersons(persons.concat(personObject))
  
      personService
      .create(personObject)
        .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setMessage(
        `${returnedPerson.name} is added to phonebook successfully`
      )
      setTimeout(() => {
        setMessage(null)
      }, 5000)
      
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
      <Notification message={Message} />
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
        <Persons persons={persons} filtername={filterName} setPersons={setPersons} setMessage={setMessage}/>
        
      </ul>
      </div>
    </div>
  )
}

export default App