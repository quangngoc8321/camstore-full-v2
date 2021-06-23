import axios from "axios"
export const axiosFunction = (token = null, data, path, method="get", query) => {
    
    if(query){
        let {pageNumber, search=""} = query;
        path = path + `?pageNumber=${pageNumber}&search=${search}`    
    }
    const option = {
        url: "/api/v1" + path,
        method,
        data,
        headers: {
            'Authorization': 'Bearer ' + token
        }
    };
    return axios(option);  
}