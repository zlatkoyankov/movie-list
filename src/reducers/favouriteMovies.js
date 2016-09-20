import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export function favouriteMovies(state = initialState.favouriteMovies, action) {

  switch(action.type) {
    case types.ADD_MOVIES_TO_FAVOURITE:
      return (Object.assign([], state, action.payload.data ));
    default:
      return state;
  }
}
