import { combineReducers } from 'redux';

import * as types from '../types';


const byId = (state = {}, action) => {
  switch (action.type) {
    case types.CARD_CREATED: {
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
    case types.CARD_CREATED: {
      const { id } = action.payload;

      return [
        ...state,
        id,
      ];
    }
    default: return state;
  }
};

const card = combineReducers({
  byId,
  order,
});

export const getTheme = (state) => state.order.map(
  id => getCard(state, id),
);


export default card;
