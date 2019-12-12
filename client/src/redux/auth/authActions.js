import { AuthActionTypes } from './authTypes';

export const setAuthInfo = user => ({
  type: AuthActionTypes.SET_AUTH_INFO,
  payload: user
});

export const logout = () => ({
  type: AuthActionTypes.LOGOUT
});
