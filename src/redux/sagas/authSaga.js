import axios from 'axios';
import { call, fork, put, takeEvery, all } from 'redux-saga/effects';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../types';

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

export default function* authSaga() {
  yield all([
    fork(watchLoginUser)
  ])
}