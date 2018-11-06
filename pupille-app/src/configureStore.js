import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import reducer from './reducers';


const configureStore = () => {
  return createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
};

export default configureStore;


