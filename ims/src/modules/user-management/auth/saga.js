/* eslint-disable camelcase */
import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES } from "./actions";


import { navigateTo } from "../../common/actions";
import { errorNotify, successNotify } from "../../../utils/notificationUtils";
import { BROWSER_STORAGE } from "../../../common/constants";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../@app/firebase";
import { doc, setDoc } from "firebase/firestore";

export function* login({ payload }) {
  const { email, password } = payload;
  try {
    const userCredential = yield call(signInWithEmailAndPassword, auth, email, password);
    yield put({ type: ACTION_TYPES.LOGIN_SUCCESS, payload: userCredential.user });
    yield put(successNotify({ title: "Success", message: "Logged in Successfully" }));
    localStorage.setItem(BROWSER_STORAGE.ACCESS_TOKEN, userCredential.user);
    yield delay(500);
    yield put(navigateTo("../home/dashboard"));
  } catch (error) {
    yield put({ type: ACTION_TYPES.LOGIN_FAILURE, payload: error.message });
  }
}

export function* register({ payload }) {
  const { email, password } = payload;
  try {
    const userCredential = yield call(createUserWithEmailAndPassword, auth, email, password);
    const user = userCredential.user;
    const userData = {
      userType: "manager",
      email: user.email,
      emailVerified: user.emailVerified,
      createdAt: user.metadata.creationTime,
      lastLoginAt: user.metadata.lastSignInTime,
      providerData: user.providerData
    };

    // Create a document in the 'users' collection with the user's UID
    yield setDoc(doc(db, "users", user.uid), userData);
    yield put({ type: ACTION_TYPES.REGISTER_SUCCESS, payload: user });
    yield put(successNotify({ title: "Success", message: "Registered Successfully" }));
    yield delay(500);
    yield put(navigateTo("../login"));
  } catch (error) {
    const message = error.message;
    const title = error.code;
    yield put(errorNotify({ title: title, message: message }));
  }
}


export default function* authSaga() {
  yield all([
    takeLatest(ACTION_TYPES.LOGIN, login),
    takeLatest(ACTION_TYPES.REGISTER, register)
  ]);
}
