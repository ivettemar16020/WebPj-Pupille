import * as types from '../types';

const comment = (state = [], action) => {
    switch (action.type) {
      case types.COMMENT_ADDED:
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
          }
        ]
      default:
        return state
    }
  }
  ​
  export default comment