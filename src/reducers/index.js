import {combineReducers} from 'redux';
import tasks from "./tasks";
import uiReducer from "./ui";
import modalReducer from "./modal";
import { reducer as formReducer } from 'redux-form'


const myReducers = combineReducers({
    tasks : tasks,
    uiReducer : uiReducer,
    modalReducer : modalReducer,
    form: formReducer
});

export default myReducers;