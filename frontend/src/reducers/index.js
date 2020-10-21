const reducer = (state = {}, action) => {
    switch(action.type) {
        case "CHANGED_OPTION":
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export default reducer;