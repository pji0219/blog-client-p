import { CLEAR_ERROR_FAILURE, CLEAR_ERROR_REQUEST, CLEAR_ERROR_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from '../types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user:'',
  userId:'',
  userName: '',
  userRole: '',
  errorMsg: '',
  successmsg: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_REQUEST:
    case LOGIN_REQUEST:
      return {
        ...state,
        errorMsg: '',
        isLoading: false
      }

    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        userId: action.payload.user.id,
        userRole: action.payload.user.role,
        errorMsg: ''
      }

    case LOGIN_FAILURE:
      localStorage.removeItem('token');
      return {
        ...state,
        ...action.payload,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        user: null,
        userId: null,
        userRole: null,
        errorMsg: action.payload.data.msg
      }

    case LOGOUT_SUCCESS:
      localStorage.removeItem('token');
      return {
        token: null,
        isAuthenticated: false,
        isLoading: false,
        user: null,
        userId: null,
        userRole: null,
        errorMsg: ''
      }

    case LOGOUT_FAILURE:
      localStorage.removeItem('token');
      return {
        ...state,
        ...action.payload,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        user: null,
        userId: null,
        userRole: null,
        errorMsg: action.payload.data.msg
      }

    case CLEAR_ERROR_REQUEST:
      return {
        ...state,
        errorMsg: null
      }

    case CLEAR_ERROR_SUCCESS:
      return {
        ...state,
        errorMsg: null
      }

    case CLEAR_ERROR_FAILURE:
      return {
        ...state,
        errorMsg: null
      }

    default:
      return state;   
  }
}

export default authReducer;