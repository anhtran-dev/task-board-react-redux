import {applyMiddleware, compose, createStore} from "redux";
import myReducers from "../reducers";
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configStore = () => {
    return createStore(
        myReducers,
        composeEnhancer(applyMiddleware(ReduxThunk,ReduxPromise))
    );
};

export default configStore;