import React from 'react'

const Country = ({ data:{name, capital, population, flags, languages} }) => {
  // const language = (Object.entries(languages).map(([key, value]) =>{
      
  //     console.log(value);
  //       <li key = {key}>{value}</li>
      
  // }))
  return (
    <>
      <h1>{name.common}</h1>
      <p>capital {capital[0]}</p>
      <p>population {population}</p>      
      <h1>languages:</h1>
      <ul>
        {Object.entries(languages).map(([key, value]) =>(
      

          <li key = {key}>{value}</li>
        ))}
      
      </ul>
      <img src={flags.png} alt={name} width='100px'/>
    </>
  )
}


export default Country