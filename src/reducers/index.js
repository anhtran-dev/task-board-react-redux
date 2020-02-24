import {combineReducers} from 'redux';
import tasks from "./tasks";
import uiReducer from "./ui";

const myReducers = combineReducers({
    tasks : tasks,
    uiReducer : uiReducer
});

export default myReducers;