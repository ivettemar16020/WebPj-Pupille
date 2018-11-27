import * as types from '../types';

const initialState = user ? { loggedIn: true, user } : {};

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_USER_LOGIN:
      return {
        loggingIn: true,
        user: action.user
      };
    case types.RECEIVE_USER_LOGIN:
      return {
        loggedIn: true,
        user: action.user
      };
    case types.FAILURE_USER_LOGIN:
      return {};
    case types.USER_LOGGED_OUT:
      return {};
    default:
      return state
  }
}

//selector
export const getUser = (state) => ({
  token: state.token,
  uid: state.uid,
  email: state.email,
})

export default user;