import React from "react";

const Options = ( { optionsData, handleOptionChange } ) => {
    const optionName = optionsData[0];
    const optionsList = optionsData[1];

    return (
        <ul className="filtersList">
            {optionsList.map((entry, index) => (
                <li key={`${entry}-${index}`}>
                    <input 
                        type="radio" 
                        name={optionName} 
                        id={entry} 
                        value={entry} 
                        className="radio"
                        onChange={handleOptionChange}
                    />
                    <label htmlFor={entry}>{entry}</label>
                </li>) 
            )}              
        </ul>
    )
}

export default Options;