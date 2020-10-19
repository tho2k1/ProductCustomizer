import React from 'react';

import { data } from "../../data";

import Options from "./Options";

const Filters = ({ handleOptionChange }) => {
    return (
        <form className="panel">
            {Object.entries(data).map( (entryName, index) => (
                <div key={`${entryName}-${index}`}>
                    <h2>{entryName[0]}</h2>
                    <Options 
                        optionsData={entryName}
                        handleOptionChange={handleOptionChange}
                    />
                </div>
            ))}
        </form>
    )
}

export default Filters;