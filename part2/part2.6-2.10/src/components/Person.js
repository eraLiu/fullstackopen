import React from 'react'

const Person = ({ person }) => {
  console.log(person.id)
  return (
    
    <li>{person.name}</li>
  )
}

export default Person