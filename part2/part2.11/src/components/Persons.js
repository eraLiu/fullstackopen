import React from "react";
import Person from "./Person";
const Persons = ({persons,filtername}) =>{
    const personsToShow =  persons.filter(person => person.name.includes(`${filtername}`))
    return(
        <>
        {personsToShow.map(person =>
            <Person key={person.id} person={person} />
          )}
        </>
    )
    
}
export default Persons