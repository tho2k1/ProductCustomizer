import React from 'react';
import { useSelector } from "react-redux";

import sort from "../../helpers/sort";
import Options from "./Options";

const Filters = ({ handleOptionChange }) => {
    const data = useSelector(state => state.fetchData.data);

    // sort data only after everything is loaded
    const sortedData = Object.entries(data).length === 4 ? sort(data) : null;

    return (
        <>
            { sortedData ?
                <form className="panel">
                    {sortedData.map( optionTypeObj => {       
                        //get needed info from objects  
                        const optionType = Object.entries(optionTypeObj)[0]

                        return (
                            <div key={`${optionType[0]}`}>
                                <h2>{optionType[0]}</h2>
                                <Options 
                                    optionType={optionType}
                                    handleOptionChange={handleOptionChange}
                                />
                            </div>
                        )
                    })}
                </form>
                :
                <p>Loading data...</p>
            }
        </>
    )
}

export default Filters;