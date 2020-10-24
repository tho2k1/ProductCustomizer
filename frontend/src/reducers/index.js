import { combineReducers } from 'redux';
import optionChange from "./optionChange";
import fetchData from "./fetchData";

export default combineReducers({
    optionChange,
    fetchData 
})

