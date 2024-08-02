import { all, call, select, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES } from "./actions";
import { handleAPIRequest } from "../../utils/http";
import { notificationListApi, readNotificationApi, searchSagaApi } from "./api";
import { getPagination } from "./selectors";

function* notifications() {
  const pagination = yield select(getPagination);
  yield call(handleAPIRequest, notificationListApi, pagination);
}

function* readNotification({ payload }) {
  yield call(handleAPIRequest, readNotificationApi, payload);
}

function* searchSaga({ payload = "" }) {
  yield call(handleAPIRequest, searchSagaApi, { search: payload });
}

export default function* homeSaga() {
  yield all([
    takeLatest(ACTION_TYPES.NOTIFICATION_LIST, notifications),
    takeLatest(ACTION_TYPES.READ_NOTIFICATION, readNotification),
    takeLatest(ACTION_TYPES.SEARCH, searchSaga)
  ]);
}
