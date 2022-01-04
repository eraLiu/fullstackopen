import React, { useState , useEffect} from 'react'
import axios from 'axios'
import Country from './components/country'
import Filter from './components/filter'
const App = () => {
  const [country, setCountry] = useState(['']) 
  const [countries, setCountries] = useState([]);
  const [filterCountry, setFilterCountry] = useState([])
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
        console.log(response.data)
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
    if (filterCountry.length === 0) return;
    if (filterCountry.length === 1) {
      return <Country data={filterCountry[0]} />;
    }
    return filterCountry.map((country,i) => <p key={i}>{country.name.common}</p>);
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
        {filterCountry.length > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : (
          showCountries()
        )}
      </div>
    </div>
  )
}

export default App
