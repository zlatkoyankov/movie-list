import * as types from './actionTypes';

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


export function loadMovies() {
  return {
    type: types.LOAD_MOVIES_SUCCES,
    allMovies: [
      {
        title: "movie 1",
        description: "movie description 1",
        year: 2000
      },
      {
        title: "movie 2",
        description: "movie description 2",
        year: 2001
      },
      {
        title: "movie 3",
        description: "movie description 3",
        year: 2002
      },
      {
        title: "movie 4",
        description: "movie description 4",
        year: 2003
      },
      {
        title: "movie 5",
        description: "movie description 5",
        year: 2004
      }
    ]
  };
}
