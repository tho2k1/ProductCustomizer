import { ENDPOINTS } from "../constants";

const getInitialOptionState = () => {
    const initialState = {}
    ENDPOINTS.map(({dataName}) => {
        initialState[dataName] = ""
    });

    return initialState
}

export default getInitialOptionState;