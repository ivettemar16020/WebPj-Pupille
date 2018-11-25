import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from '../types';
import { fetchLogIn, postSignIn } from './user'; 


export default function* root() {
  /*
    yield all([
      fork(watchNavigate),
      fork(watchLoadUserPage),
      fork(watchLoadRepoPage),
      fork(watchLoadMoreStarred),
      fork(watchLoadMoreStargazers)
    ])*/

    yield takeLatest(types.REQUEST_USER_LOGIN, fetchLogIn); 
  }