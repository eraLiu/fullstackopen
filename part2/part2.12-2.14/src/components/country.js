import React, {useEffect, useState} from 'react'
import axios from 'axios'
const Country = ({ data:{name, capital, population, flags, languages} }) => {
  const [weather, setWeather] = useState({})


  useEffect(() => {
    const params = {
      q:capital[0],
      appid: process.env.REACT_APP_API_KEY,
      
    }
    axios
      .get('http://api.openweathermap.org/data/2.5/weather',{params})
      .then(response => {
        console.log('promise fulfilled')
        setWeather(response.data)
        console.log(response.data)
      }).catch(error => {
        console.log(error);
    })
  }, [])
  const getWindDirection = (inputDegree) =>{
    const dir = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE","S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];
    const directionsIdx = Math.round((inputDegree % 360) / 22.5) + 1;
    const direction = dir[directionsIdx];
    return direction;
}
  return (
    <>
      <h1>{name.common}</h1>
      <p>capital {capital[0]}</p>
      <p>population {population}</p>      
      <h2>Spoken languages:</h2>
      <ul>
        {Object.entries(languages).map(([key, value]) =>(
      

          <li key = {key}>{value}</li>
        ))}
      
      </ul>
      <img src={flags.png} alt={name} width='100px'/>
      <h2>Weather in {capital[0]}</h2>
      {Object.keys(weather).length!==0 &&(
        <>
          <h4>temperature: {Math.round(weather.main.temp - 273.15)} Celcius</h4>

          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
          <h4>wind: {Math.round(weather.wind.speed * 2.237)} mph direction {getWindDirection(weather.wind.speed)} </h4>
        </>
      )}

    </>
  )
}


export default Country