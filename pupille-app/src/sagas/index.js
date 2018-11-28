import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from '../types';
import { createUser} from './user'; 


function* Root() {
    yield takeLatest(types.REQUEST_USER_SIGNIN, createUser); 
    //yield takeLatest(types.REQUEST_USER_LOGIN, fetchLogIn); 
}

export default Root; 