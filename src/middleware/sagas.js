import {fork,take,call,put,delay,takeLatest,select} from "redux-saga/effects";
import * as actionTypes from "../constants/tasks/actionTypes";
import {getAllRequest} from "../apis/tasks";
import {STATUS_CODE} from "../constants";
import {filterTaskSuccess, getListTaskFail, getListTaskSuccess} from "../actions/tasks";
import {hideLoading, showLoading} from "../actions/ui";
import {FILTER_TASK} from "../constants/tasks/actionTypes";

function* watchFetchListTasksAction() {
    while(true){
        // take -- blocking
        yield take(actionTypes.GET_ALL);
        // show loading
        // put - non-blocking
        yield put(showLoading());
        // call - blocking
        const res = yield call(getAllRequest);

        if(res.status === STATUS_CODE.SUCCESS){
            // dispatch action
            yield put(getListTaskSuccess(res.data));
        }
        else{
            yield put(getListTaskFail(res.data));
        }
        // hide loading
        // delay - blocking
        yield delay(700);
        yield put(hideLoading());  

    }

}

function* watchCreateTaskAction() {
    yield 1;
}

function* filterTaskSaga({payload}) {
    yield delay(800);
    let {keyword}  = payload;
    let listTask = yield select(state=>state.tasks);
    let filterTask = listTask.filter(task => task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase()));

    yield put(filterTaskSuccess(filterTask));

}
function* rootSaga() {
    // fork - non-blocking
    yield fork(watchCreateTaskAction);
    yield fork(watchFetchListTasksAction);

    // takeLatest
    yield takeLatest(FILTER_TASK,filterTaskSaga);

}

export default rootSaga;