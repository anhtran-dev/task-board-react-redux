import {applyMiddleware, compose, createStore} from "redux";
import myReducers from "../reducers";
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../middleware/sagas";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const configStore = () => {
    const store = createStore(
        myReducers,
        composeEnhancer(applyMiddleware(ReduxThunk,ReduxPromise,sagaMiddleware)),
    );
    sagaMiddleware.run(rootSaga);
    return store;
};


export default configStore;