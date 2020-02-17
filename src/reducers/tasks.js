import {GET_ALL} from "../constants/tasks/actionTypes";

let initialState = [];

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL : {
            state = action.payload;

            return [...state];
        }
        //
        default :
            return [...state];
    }
};

export default tasks;