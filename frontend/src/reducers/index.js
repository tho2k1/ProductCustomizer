import { combineReducers } from 'redux';
import optionChangeReducer from "./optionChange";
import dataReducer from "./fetchData";

export default combineReducers({
    optionChangeReducer,
    dataReducer 
})

