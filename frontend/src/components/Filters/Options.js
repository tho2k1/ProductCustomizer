import React from "react";

const Options = ( { optionType, handleOptionChange } ) => {
    const optionTypeName = optionType[0];
    const optionsList = optionType[1];
    
    console.log(optionsList)
    return (
        <ul className="filtersList">
            {optionsList.map( option => {
                const { name: optName, isAvailable, value } = option; 
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
                            style = {optionTypeName === "colors" ? { borderLeft: `1rem solid ${value}`, padding: ".4rem .6rem"} : {}}
                        >{optName}</label>
                    </li>)
                }
            )}            
        </ul>
    )
}

export default Options;