import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export function favouriteMovies(state = initialState.favouriteMovies, action) {
  switch(action.type) {
    case types.ADD_MOVIES_TO_FAVOURITE:
      return [
        ...state,
        action.movie
      ] ;

    case types.REMOVE_MOVIES_FROM_FAVOURITE:
      {
        const index = state.indexOf(action.movie);
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ];
      }
    case types.UPDATE_FAVOURITE_MOVIES:
      return [
        ...action.movies
      ];

    default:
      return state;
  }
}
