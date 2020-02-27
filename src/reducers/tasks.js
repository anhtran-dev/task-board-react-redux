import {
    ADD_TASK, ADD_TASK_FAIL, ADD_TASK_SUCCESS, DELETE_TASK,
    FILTER_TASK,
    FILTER_TASK_SUCCESS,
    GET_ALL,
    GET_ALL_FAIL,
    GET_ALL_SUCCESS, SET_TASK_EDIT
} from "../constants/tasks/actionTypes";
import {toastError, toastSuccess} from "../commons/toastNotify";

let initialState = {
    listTask : [],
    taskEdit : null
};

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL : {
            return {
                ...state
            }
        }
        //
        case GET_ALL_SUCCESS : {
            return {
                ...state,
                listTask : action.payload
            }
        }

        case GET_ALL_FAIL : {
            return {
                ...state
            }
        }
        case FILTER_TASK : {
            return {
                ...state
            };
        }
        case FILTER_TASK_SUCCESS : {
            return {
                ...state,
                listTask: action.payload
            }
        }
        case ADD_TASK : {
            return {
                ...state,
            }
        }

        case ADD_TASK_SUCCESS : {
            toastSuccess('Add new task success !!!');
            return {
                ...state,
                // listTask: state.listTask.concat([action.payload.data])
                listTask: [action.payload.data].concat(state.listTask)   // them moi du lieu len dau
            }
        }

        case ADD_TASK_FAIL : {
            toastError(action.payload.error);
            return {
                ...state
            }
        }

        case SET_TASK_EDIT : {
            return {
                ...state,
                taskEdit: action.payload.task
            }
        }
        case DELETE_TASK :{
            // let index = state.listTask.findIndex(item => item.id === action.payload.id);
            toastSuccess('Delete task success !!!');

            return {
                ...state,
                listTask : state.listTask.filter(item => item.id !== action.payload.id)
            }

        }

        default :
            return state;
    }
};

export default tasks;