import React from "react";
import Person from "./Person";
const Persons = ({persons,filtername, setPersons, setMessage}) =>{
    const personsToShow =  persons.filter(person => person.name.includes(`${filtername}`))
    return(
        <>
        {personsToShow.map(person =>

                <Person key={person.id} person={person} setPersons={setPersons} persons={persons}
                setMessage={setMessage}/>
                
            
          )}
        </>
    )
    
}
export default Persons