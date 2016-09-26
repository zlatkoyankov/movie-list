import { combineReducers } from 'redux';

import { allMovies } from './allMovies';
import { favouriteMovies } from './favouriteMovies';

const rootReducer = combineReducers({
  allMovies,
  favouriteMovies
});

export default rootReducer;
