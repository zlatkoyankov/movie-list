import { sortBy } from 'lodash';

import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export function allMovies(state = initialState.allMovies, action) {
  switch(action.type) {
    case types.LOAD_MOVIES_SUCCESS:
      return [
        ...state,
        ...action.allMovies
      ];

    case types.ADD_MOVIES_TO_ALL:
      return sortBy([
        ...state,
        action.movie
      ], 'title');

    case types.REMOVE_MOVIES_FROM_ALL:
      {
        const index = state.indexOf(action.movie);
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ];
      }

    default:
      return state;
  }
}
