import getInitialOptionState from "../helpers/getInitialOptionState";

const initialState = getInitialOptionState();

const optionChangeReducer = (state = {...initialState}, action) => {
    switch(action.type) {
        case "CHANGED_OPTION":
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export default optionChangeReducer;