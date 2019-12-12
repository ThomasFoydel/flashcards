import { AuthActionTypes } from './authTypes.js';

const INITIAL_STATE = {
  token: '',
  email: '',
  username: '',
  userId: '',
  isLoggedIn: false
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.SET_AUTH_INFO:
      const { token, email, username, userId } = action.payload;
      return {
        ...state,
        token,
        email,
        username,
        userId,
        isLoggedIn: true
      };
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        token: '',
        email: '',
        username: '',
        userId: '',
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export default authReducer;
