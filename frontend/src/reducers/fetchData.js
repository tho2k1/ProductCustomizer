import update from 'react-addons-update';

const initialState = {
    data: [],
    loaded: false,
    error: null
};
  
const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_DATA_BEGIN':
            return {
                ...state,
                loaded: false,
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

        case 'CHANGED_AVAILABILITY':
            let dataObj = {};

            state.data[action.payload.addons].map((addon, index) => {
                if(action.payload.unavailableAddonsIndexes.includes(index)) {
                    dataObj= {...dataObj, [index]: {isAvailable: {$set: false}}}
                } else {
                    dataObj= {...dataObj, [index]: {isAvailable: {$set: true}}}
                }
            })

            return {
                ...state, 
                    data: {...state.data, 
                        [action.payload.addons]: update(state.data[action.payload.addons], dataObj)
                    },
                }
        default:
            return state;
    }
}

export default dataReducer;