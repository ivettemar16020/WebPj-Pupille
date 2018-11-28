import { call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import {postUser, API_URL} from './api';
import {startSubmit, stopSubmit, reset} from 'redux-form';


export function* createUser(action){
    yield put(startSubmit('signInModal'));
    let errors = {};
    const {username, email, password } = action.payload;
    const newUser = yield call(postUser, `${API_URL}/users/`, {username, email, password});
    if(Object.keys(newUser).length === 1){
     yield put({type: 'REQUEST_FAILED', errors: newUser.username});
      errors = newUser.username;
      alert(newUser.username)
    }else{ 
      alert("Nuevo usuario creado")
      yield put(reset('signInModal'));
    }
    yield put(stopSubmit('signInModal', errors));
}


//Fetch
export function* fetchLogIn(action) {
    const { email, password } = action.payload;
    console.log(email, password);
    const user = yield call(postUser, `${API_URL}/auth-jwt/`, email, password);
    console.log(user);
    yield put(actions.receiveLogIn(user.token, user.userid, user.mail));
}