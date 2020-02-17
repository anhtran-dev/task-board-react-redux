import {GET_ALL, GET_ALL_FAIL, GET_ALL_SUCCESS} from "../constants/tasks/actionTypes";

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
        default :
            return [...state];
    }
};

export default tasks;