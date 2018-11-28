import { combineReducers } from 'redux';

import * as types from '../types';

export const requestThemes = () => ({
  type: types.FETCH_NOTES_REQUESTED,
})

export const successRequestThemes = ( themes ) => ({
  type: types.FETCH_NOTES_SUCCESS,
  payload: { themes }
})


const byId = (state = {}, action) => {
  switch (action.type) {
    case types.THEME_CREATED: {
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
    case types.THEME_CREATED: {
      const { id } = action.payload;

      return [
        ...state,
        id,
      ];
    }
    default: return state;
  }
};

const themes = (state=[],action)=>{
  switch(action.type){
    case 'THEME_CREATED':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          cards: action.cards,
        }
      ];
    case 'THEME_DELETED':
        const newState = [...state];
        delete newState[action.id];
        return newState;
    default:
      return state;
  }
}

const theme = combineReducers({
  byId,
  order,
  themes,
});

export const getTheme = (state, id) => state.byId[id];
export const getThemes = (state) => state.order.map(
  id => getTheme(state, id),
);

export const getCardsIdsInTheme = (state) => state.order;

export default theme;
