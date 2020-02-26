import {fork, take, call, put, delay, takeLatest} from "redux-saga/effects";
import * as actionTypes from "../constants/tasks/actionTypes";
import {addTaskRequest, getAllRequest} from "../apis/tasks";
import {STATUS_CODE} from "../constants";
import {
    addTaskFail,
    addTaskSuccess,
    getListTask,
    getListTaskFail,
    getListTaskSuccess
} from "../actions/tasks";
import {hideLoading, showLoading} from "../actions/ui";
import {FILTER_TASK} from "../constants/tasks/actionTypes";
import {ADD_TASK} from "../constants/tasks/actionTypes";
import {hideModal} from "../actions/modal";

function* watchFetchListTasksAction() {
    while (true) {
        // take -- blocking
        const action = yield take(actionTypes.GET_ALL);
        const {payload} = action;
        const {params} = payload;
        // show loading
        // put - non-blocking
        yield put(showLoading());
        // call - blocking
        const res = yield call(getAllRequest,params);

        if (res.status === STATUS_CODE.SUCCESS) {
            // dispatch action
            yield put(getListTaskSuccess(res.data));
        } else {
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

    let {keyword} = payload;
    yield put(getListTask({
        q : keyword
    }));
}

function* addTaskSaga({payload}) {
    const {title, desc} = payload;
    yield put(showLoading());
    const res = yield call(addTaskRequest, {
        title: title,
        desc: desc,
        status: 0
    });
    if (res.status === STATUS_CODE.CREATED) {
        yield put(addTaskSuccess(res.data));
        yield put(hideModal());
    } else {
        yield put(addTaskFail(res.data))
    }

    yield delay(800);
    yield put(hideLoading());

}

function* rootSaga() {
    // fork - non-blocking
    yield fork(watchCreateTaskAction);
    yield fork(watchFetchListTasksAction);

    // takeLatest
    yield takeLatest(FILTER_TASK, filterTaskSaga);

    // add task
    yield takeLatest(ADD_TASK, addTaskSaga);

}

export default rootSaga;