import React from "react";

const Filter = ({title,name,handleFilterChange}) => {
    return (
        <>
        {title}
        <input 
                  value={name}
                  onChange={handleFilterChange}
              />
        </>

    )
}

export default Filter