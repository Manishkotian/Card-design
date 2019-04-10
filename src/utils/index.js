//function to get sorted date and length list in correct format
//param api data
//return sorted list  of date and lengthfrom api data
export const getSortedDateAndNumberArray = (apiData) => {
    const newArray = apiData.map((data)=> {
        if( data['Next Session Date']) {
            data['Next Session Date'] = data['Next Session Date'].replace(/th|st|nd|rd|,|''/g,"");
        }
        else {
            data['Next Session Date'] = 'N/A';
        }        
        return data;
    }).map((data) => {
        if(!data.Length) {
            data.Length = 'N/A'
        }       
        return data;
    });
    return newArray;
}

export default {getSortedDateAndNumberArray};
