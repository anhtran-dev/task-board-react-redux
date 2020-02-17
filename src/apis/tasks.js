import callApi from "../commons/callApi";
import {API_URL} from "../constants";

const url = 'tasks';
export const getAllRequest = () => {
    return callApi.get(`${API_URL}/${url}`);
};