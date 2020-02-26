
import {
    ADD_TASK, ADD_TASK_FAIL, ADD_TASK_SUCCESS,
    FILTER_TASK,
    FILTER_TASK_SUCCESS,
    GET_ALL,
    GET_ALL_FAIL,
    GET_ALL_SUCCESS, SET_TASK_EDIT
} from "../constants/tasks/actionTypes";

export const getListTask = (params=[]) => {
    return  {
        type : GET_ALL,
        payload :{
            params
        }
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

export const addTask = (title, desc) => {
    return {
        type : ADD_TASK,
        payload : {
            title,
            desc
        }
    }
};
export const addTaskSuccess = (data) => {
    return {
        type : ADD_TASK_SUCCESS,
        payload : {
            data
        }
    }
};
export const addTaskFail = (error) => {
    return {
        type : ADD_TASK_FAIL,
        payload :{
            error
        }
    }
};

export const setTaskEdit = (task) => {
    return {
        type : SET_TASK_EDIT,
        payload : {
            task
        }
    }
};