import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export function allMovies(state = initialState.allMovies, action) {
  switch(action.type) {
    case types.LOAD_MOVIES_SUCCES:
      return (Object.assign([], state, action.allMovies ));
    default:
      return state;
  }
}
