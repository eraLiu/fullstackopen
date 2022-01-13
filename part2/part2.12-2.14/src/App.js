import React, { useState , useEffect} from 'react'
import axios from 'axios'
import Country from './components/country'
import Filter from './components/filter'
const App = () => {
  const [country, setCountry] = useState(['']) 
  const [countries, setCountries] = useState([]);
  const [filterCountry, setFilterCountry] = useState([])
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])
  const handleFilterChange = (e) => {
    console.log(e.target.value)
    setCountry(e.target.value)
    setFilterCountry(
      countries.filter(
        (country) => 
          country.name.common.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      )
    )
  }
  const showCountries = () => {

    if(filterCountry.length>10){
      return <p>Too many matches, specify another filter</p>
    }
    
    else if((filterCountry.length>=2 && filterCountry.length<=10 || filterCountry.length ===0)){
      console.log(filterCountry);
      return filterCountry.map((country,i) => <p key={i}>{country.name.common}<button onClick={()=>setFilterCountry([filterCountry[i]])}>Show</button></p> );
    }
    else {
      console.log(filterCountry);
      return <Country data={filterCountry[0]} />;
    }
    
  };
  

  return (
    <div>
      <div>
        <p>
          find countries{" "}
          <input value={country} name="country" onChange={handleFilterChange} />
        </p>
      </div>

      <div> 
        {country.length ===0 ?  '': (
          showCountries()
        )}
      </div>
    </div>
  )
}

export default App
