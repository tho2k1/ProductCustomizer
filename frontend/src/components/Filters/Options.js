import React from "react";

const Options = ( { optionsList, optionName } ) => {
    console.log(optionName)
    return (
        <ul className="filtersList">
            {optionsList.map((entry, index) => (
                <li key={`${entry}-${index}`}>
                    <input type="radio" name={optionName} id={entry} className="radio"/>
                    <label htmlFor={entry}>{entry}</label>
                </li>) 
            )}              
        </ul>
    )
}

export default Options;