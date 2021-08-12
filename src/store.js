import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './redux/reducers';
import rootSaga from './redux/sagas';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const middlewares = [sagaMiddleware, routerMiddleware(history)];