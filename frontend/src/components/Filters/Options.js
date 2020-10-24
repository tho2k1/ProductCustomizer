import React from "react";

const Options = ( { optionType, handleOptionChange } ) => {
    const optionTypeName = optionType[0];
    const optionsList = optionType[1];

    return (
        <ul className="filtersList">
            {optionsList.map( option => {
                const { name: optName } = option; 

                return (
                    <li key={`${optName}`}>
                        <input 
                            type="radio" 
                            name={optionTypeName} 
                            id={optName} 
                            value={optName} 
                            className="radio"
                            onChange={handleOptionChange}
                        />
                        <label htmlFor={optName}>{optName}</label>
                    </li>)
                }
            )}            
        </ul>
    )
}

export default Options;