import callApi from "../commons/callApi";
import {API_URL} from "../constants";
import  qs from "query-string";

const url = 'tasks';
export const getAllRequest = (params = {}) => {
    let queryParams = '';
    if(Object.keys(params).length > 0){
        queryParams =  `${qs.stringify(params)}`;
    }
    return callApi.get(`${API_URL}/${url}?${queryParams}`);
};

export const addTaskRequest = (data) => {
    return callApi.post(`${API_URL}/${url}`,data);
};

export const deleteTaskRequest = (id) => {
    return callApi.delete(`${API_URL}/${url}/${id}`);
};
