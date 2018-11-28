import { call, put, select } from 'redux-saga/effects'
import * as types from '../types'
import { BASE_API_URL } from '../constants'
import { get, change } from './apiInterface';

import reducers, * as selectors from '../reducers';
import * as actions from '../actions';

/*
export function* fetchNotasFromNotebook(action) {
  const { token } = yield select(selectors.getUser);
  const { id } = action.payload;
  try {
    const themes = yield call(get, `${BASE_API_URL}/notebook/${id}/all-notes/`, token);
    const t = themes === undefined ? [] : themes;
    console.log(t);
    yield put(actions.successRequestThemes(n));
  }
  catch (e) { 
    //yield put({type: types.FETCH_NOTES_FAILTURE, payload: e});
  }
}*/