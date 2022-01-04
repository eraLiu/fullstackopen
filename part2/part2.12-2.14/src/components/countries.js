import React from "react";
import Country from "./country";
const Countries = ({countries,filtername}) =>{
    const countriesToShow =  countries.filter(country => country.name.toLowerCase().includes(`${filtername}`.toLowerCase()))
    return(
        <>
        {countriesToShow.map((country,i) =>
            <Country key={i} country={country} />
          )}
        </>
    )
    
}
export default Countries