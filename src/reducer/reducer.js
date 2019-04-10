import Constants from '../constants';
const initialState = {
    apiData: [],
};

function Reducer(state = initialState, action) {
    switch (action.type) {
    case Constants.SET_API_DATA:
        return {
            ...state,
            apiData :  action.payload,
        };
    default:
        return state;
    }
}

export default Reducer;