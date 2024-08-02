import { all, call, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES } from "./actions";
import { handleAPIRequest } from "../../../utils/http";
import { dashboardApi, recentActivitiesApi, fetchCourseListApi, fetchLearningProgressApi } from "./api";

function* dashboardSaga() {
  yield call(handleAPIRequest, dashboardApi);
}

function* recentActivitiesSaga() {
  yield call(handleAPIRequest, recentActivitiesApi);
}

function* fetchCourseListSaga() {
  yield call(handleAPIRequest, fetchCourseListApi);
}

function* fetchLearningProgressSaga() {
  yield call(handleAPIRequest, fetchLearningProgressApi);
}


export default function* homeSaga() {
  yield all([
    yield takeLatest(ACTION_TYPES.DASHBOARD, dashboardSaga),
    yield takeLatest(ACTION_TYPES.RECENT_ACTIVITIES, recentActivitiesSaga),
    yield takeLatest(ACTION_TYPES.FETCH_COURSE_LIST, fetchCourseListSaga),
    yield takeLatest(ACTION_TYPES.FETCH_FETCH_LEARNING, fetchLearningProgressSaga)

  ]);
}

