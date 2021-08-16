import axios from 'axios';
import { call, fork, put, takeEvery, all } from 'redux-saga/effects';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS } from '../types';

// 로그인
const loginUserAPI = (loginData) => {
  console.log(loginData, 'loginData')
  const config = {
    Headers: {
      'content-Type': 'application/json'
    }
  }
  return axios.post('api/auth', loginData, config);
}

function* loginUser(action) {
  try {
    const result = yield call(loginUserAPI, action.payload)
    yield put({
      type: LOGIN_SUCCESS,
      payload: result.data
    })
  } catch (err) {
    yield put({
      type: LOGIN_FAILURE,
      payload: err.resopnse
    })
  }
}

function* watchLoginUser() {
  yield takeEvery(LOGIN_REQUEST, loginUser)
}

// 로그아웃
function* logout(action) {
  try {
    yield put({
      type: LOGOUT_SUCCESS,
    })
  } catch (err) {
    yield put({
      type: LOGOUT_FAILURE,
    })
  }
}

function* watchlogout() {
  yield takeEvery(LOGOUT_REQUEST, logout)
}


export default function* authSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchlogout)
  ])
}