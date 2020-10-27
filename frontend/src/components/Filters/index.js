import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeOption, changeAvailability } from "../../actions";

import sort from "../../helpers/sort";
import getAvailableAddons from "../../helpers/getAvailableAddons";
import assignAddons from "../../helpers/assignAddons";
import Options from "./Options";

const Filters = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.fetchedData.data);

    const handleOptionChange = event => {
        const { name: targetName, value: targetValue } = event.target;
        
        const addons = assignAddons(targetName);
        const availableAddons = getAvailableAddons(data, targetName, targetValue, addons);
        
        dispatch(changeOption(targetName, targetValue)) 
        if(addons) dispatch(changeAvailability(data, addons, availableAddons)) 
    }
    

    // sort data after everything is loaded
    const sortedData = Object.entries(data).length === 4 ? sort(data) : null;

    return (
        <div className="panel">
            <h2>Options</h2>
            { sortedData ?
                <form>
                    {sortedData.map( optionTypeObj => {       
                        //get needed info from objects  
                        const optionType = Object.entries(optionTypeObj)[0]

                        return (
                            <div key={`${optionType[0]}`}>
                                <h3>{optionType[0]}</h3>
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
        </div>
    )
}

export default Filters;