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
    case Constants.DELETE_EMPLOYEE_DETAILS:
        const {apiData} = state;
        const data =  apiData.filter(data => data.id !== `${action.payload}`);
        return {
            ...state,
            apiData: data,
        };
    case Constants.SET_NEW_EMPLOYEE_DETAILS:
        state.apiData.unshift(action.payload);
        return {
            ...state,
            apiData: state.apiData,
        };
    default:
        return state;
    }
}

export default Reducer;