import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import authSaga from './authSaga';
import dotenv from 'dotenv';
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_BASIC_SERVER_URL;

function* rootSaga() {
  yield all([fork(authSaga)]);
}

export default rootSaga;