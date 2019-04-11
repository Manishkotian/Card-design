import Constants from '../constants';

export const setApiData = (data) => {
    return ({type:Constants.SET_API_DATA, payload:data});
};


export const deleteEmployeeDetails = (data) => {
    return ({type:Constants.DELETE_EMPLOYEE_DETAILS, payload:data});
};

export const setNewEmployeeDetails = (data) => {
    return ({type:Constants.SET_NEW_EMPLOYEE_DETAILS, payload:data});
};

export default { setApiData, deleteEmployeeDetails};



