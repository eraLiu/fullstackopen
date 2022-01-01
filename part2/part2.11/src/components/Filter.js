import React from "react";

const Filter = ({title,name,handleFilterChange}) => {
    return (
        <>
        {title}
        filtername: <input 
                  value={name}
                  onChange={handleFilterChange}
              />
        </>

    )
}

export default Filter