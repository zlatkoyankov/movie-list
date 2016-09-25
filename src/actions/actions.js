import * as types from './actionTypes';
import mock_momives from '../mock/mock_movies';

// export function loadMovies() {
//   return {
//     types: [types.LOAD_MOVIES, types.LOAD_MOVIES_SUCCES, types.LOAD_MOVIES_ERROR],
//     payload: {
//       request: {
//         url: '/movies'
//       }
//     }
//   };
// }

export function addToFavourite(movie) {
  return {
    type: types.ADD_MOVIES_TO_FAVOURITE,
    movie: movie
  };
}

export function removeFromFavourite(movie) {
  return {
    type: types.REMOVE_MOVIES_FROM_FAVOURITE,
    movie: movie
  };
}

export function updateFavouriteMovies(movies) {
  return {
    type: types.UPDATE_FAVOURITE_MOVIES,
    movies: movies
  };
}

export function addToAll(movie) {
  return {
    type: types.ADD_MOVIES_TO_ALL,
    movie: movie
  };
}

export function removeFromAll(movie) {
  return {
    type: types.REMOVE_MOVIES_FROM_ALL,
    movie: movie
  };
}


export function loadMovies() {
  return {
    type: types.LOAD_MOVIES_SUCCES,
    allMovies: mock_momives
  };
}
