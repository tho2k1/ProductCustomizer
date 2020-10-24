const initialState = {
    data: [],
    loaded: false,
    error: null
};
  
const fetchDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_DATA_BEGIN':
            return {
                ...state,
                loading: false,
                error: null
            };

        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                loaded: true,
                data: {...state.data, ...action.payload}
            };

        case 'FETCH_DATA_FAILURE':
            return {
                ...state,
                loaded: false,
                error: action.payload.error,
                data: []
            };

        default:
            return state;
    }
}

export default fetchDataReducer;