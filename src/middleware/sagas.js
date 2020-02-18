import {fork,take,call,put} from "redux-saga/effects";
import * as actionTypes from "../constants/tasks/actionTypes";
import {getAllRequest} from "../apis/tasks";
import {STATUS_CODE} from "../constants";
import {getListTaskFail, getListTaskSuccess} from "../actions/tasks";

function* watchFetchListTasksAction() {
    while(true){
        yield take(actionTypes.GET_ALL);
        const res = yield call(getAllRequest);

        if(res.status === STATUS_CODE.SUCCESS){
            yield put(getListTaskSuccess(res.data));
        }
        else{
            yield put(getListTaskFail(res.data));
        }
    }

}

function* watchCreateTaskAction() {
    yield 1;
}

function* rootSaga() {
    yield fork(watchCreateTaskAction);
    yield fork(watchFetchListTasksAction);

}

export default rootSaga;