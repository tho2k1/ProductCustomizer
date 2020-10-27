import { combineReducers } from 'redux';
import optionsChanged from "./optionChange";
import fetchedData from "./fetchData";

export default combineReducers({
    optionsChanged,
    fetchedData 
})

