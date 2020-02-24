
import {FILTER_TASK, FILTER_TASK_SUCCESS, GET_ALL, GET_ALL_FAIL, GET_ALL_SUCCESS} from "../constants/tasks/actionTypes";

export const getListTask = () => {
    return  {
        type : GET_ALL,
    };
};

export const getListTaskSuccess = (data) => {
    return {
        type : GET_ALL_SUCCESS,
        payload : data
    }
};

export  const getListTaskFail = (err) => {
    return {
        type : GET_ALL_FAIL,
        payload : err
    }
};

export const filterTask = keyword => {
    return {
        type : FILTER_TASK,
        payload : {
            keyword
        }
    }
};

export const filterTaskSuccess = data => {
    return {
        type : FILTER_TASK_SUCCESS,
        payload : data
    }
};