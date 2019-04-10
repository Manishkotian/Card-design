import Constants from '../constants';

export const setApiData = (data) => {
    return ({type:Constants.SET_API_DATA, payload:data});
};




