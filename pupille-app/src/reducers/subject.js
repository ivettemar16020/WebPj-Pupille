import { combineReducers } from 'redux';

import * as types from '../types';


const byId = (state = {}, action) => {
  switch (action.type) {
    case types.SUBJECT_CREATED: {
      const { id } = action.payload;

      return {
        ...state,
        [id]: action.payload,
      };
    }
    
    default: return state;
  }
};

const order = (state = [], action) => {
  switch (action.type) {
    case types.SUBJECT_CREATED: {
      const { id } = action.payload;

      return [
        ...state,
        id,
      ];
    }
    default: return state;
  }
};

const subject = combineReducers({
  byId,
  order,
});

export const getSubject = (state, id) => state.byId[id];
export const getSubjects = (state) => state.order.map(
  id => getSubject(state, id),
);


export default subject;
