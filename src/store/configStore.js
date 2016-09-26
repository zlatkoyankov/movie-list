import { createStore } from 'redux';

import rootReducer from '../reducers';



export default function configStore(preloadState = {}) {
  const store = createStore(
    rootReducer,
    preloadState
  );
  return store;
}
