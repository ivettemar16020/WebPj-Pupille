import { call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import {postUser} from './api';

//POST

export function* postLogIn(action){

}

export function* postSignIn(action){
    const { username, password, email } = action.payload;
    const newUser = yield call(postUser, `http://127.0.0.1:8000/pupille/v1/users`, {username, password, email});
    yield put(actions.signIn())

}


//Fetch

export function* fetchLogIn(action) {
    const { email, password } = action.payload;
    console.log(email, password);
    const user = yield call(postUser, `http://127.0.0.1:8000/pupille/v1/auth-jwt/`, email, password);
    console.log(user);
    yield put(actions.receiveLogIn(user.token, user.userid, user.mail));
}