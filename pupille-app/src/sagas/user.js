import { call, put } from 'redux-saga/effects';
import * as actions from '../actions';

const postLogIn = (url, email, password) => {
    const user = JSON.stringify({
        email: email,
        password: password,
    })
    console.log(user)
    return fetch(url, {
        method: 'POST',
        body: user,
        headers: {
            'Content-Type': 'application/json',
        }
    })
      .then( response => response.json() )
      .catch( e => console.log(e))
}


export function* fetchLogIn(action) {
    const { email, password } = action.payload;
    console.log(email, password);
    const user = yield call(postLogIn, `http://127.0.0.1:8000/pupille/v1/auth-jwt/`, email, password);
    console.log(user);
    yield put(actions.logIn(user.token, user.userid, user.mail));
}