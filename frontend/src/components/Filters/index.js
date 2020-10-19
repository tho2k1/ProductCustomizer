import React from 'react';

import { data } from "../../data";

import Options from "./Options";

const Filters = () => {
    return (
        <form>
            {Object.entries(data).map( (entryName, index) => (
                <div key={`${entryName}-${index}`}>
                    <h2>{entryName[0]}</h2>
                    <Options optionsList={entryName[1]} optionName={entryName[0]}/>
                </div>
            ))}
        </form>
    )
}

export default Filters;