import {FILTER_TASK, FILTER_TASK_SUCCESS, GET_ALL, GET_ALL_FAIL, GET_ALL_SUCCESS} from "../constants/tasks/actionTypes";

let initialState = [];

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL : {
            return [...state];
        }
        //
        case GET_ALL_SUCCESS : {
            state = action.payload;
            return [...state];
        }

        case GET_ALL_FAIL : {
            console.log(action);
            return [...state];
        }
        case FILTER_TASK : {
            return [...state];
        }
        case FILTER_TASK_SUCCESS : {
            console.log(action);
            state = action.payload;
            return [...state];
        }

        default :
            return [...state];
    }
};

export default tasks;