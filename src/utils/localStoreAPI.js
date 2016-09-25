import initialState from '../store/initialState';

const MOVIE_LISTS = "MOVIE_LISTS";

export function saveToStore(state) {
  checkLocalStorageAvailable();
  
  if (state) {
    const lists = JSON.stringify(state);
    localStorage.setItem(MOVIE_LISTS, lists);
    return state;
  }
}

export function restoreFromStore() {
  checkLocalStorageAvailable();

  const stringMovieList = localStorage.getItem(MOVIE_LISTS);
  let state = initialState;

  try {
    state = JSON.parse(stringMovieList);
  } catch (e) {
    throw Error("Local Storage can't parse movies list e = ", e);
  }

  return state ? state : initialState;
}

export function removeLocalStorage(){
  checkLocalStorageAvailable();

  localStorage.removeItem(MOVIE_LISTS);
}

function checkLocalStorageAvailable() {
  if (typeof(Storage) == "undefined") {
    throw Error("Local Storage is not supported");
  }
}
