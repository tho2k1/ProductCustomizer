import React from "react";

const Options = ( { optionType, handleOptionChange } ) => {
    const optionTypeName = optionType[0];
    const optionsList = optionType[1];
    
    return (
        <ul className="filtersList">
            {optionsList.map( option => {
                const { name: optName, isAvailable, value, price } = option; 
                return (
                    <li key={`${optName}`}>
                        <input 
                            type="radio" 
                            name={optionTypeName} 
                            id={optName} 
                            value={optName} 
                            className="radio"
                            onChange={handleOptionChange}
                            disabled={!isAvailable}
                        />
                        <label 
                            htmlFor={optName}
                            title={`price: ${price} $`}
                            style = {optionTypeName === "colors" ? { border: `2px solid ${value}`, borderLeft: `1.2rem solid ${value}`, padding: ".4rem .6rem"} : {}}
                        >{optName}</label>
                    </li>)
                }
            )}            
        </ul>
    )
}

export default Options;