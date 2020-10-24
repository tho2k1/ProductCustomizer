import React from 'react';
import { useSelector } from "react-redux";

import Options from "./Options";

const Filters = ({ handleOptionChange }) => {
    const dataLoaded = useSelector(state => state.fetchData.loaded)
    const data = useSelector(state => state.fetchData.data)

    return (
        <>
            { dataLoaded ?
                <form className="panel">
                    {Object.entries(data).map( optionType => (
                        <div key={`${optionType[0]}`}>
                            <h2>{optionType[0]}</h2>
                            <Options 
                                optionType={optionType}
                                handleOptionChange={handleOptionChange}
                            />
                        </div>
                    ))}
                </form>
                :
                <p>Loading data...</p>
            }
        </>
    )
}

export default Filters;