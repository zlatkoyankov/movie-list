import { createStore, applyMiddleware, compose } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import createLogger from 'redux-logger';
// import devTools from 'remote-redux-devtools'
import rootReducer from '../reducers';
// import axios from 'axios';
// import axiosMiddleware from 'redux-axios-middleware';
//
// const loggerMiddleware = createLogger();
// const client = axios.create({
//   baseURL: 'http://localhost:3000',
//   responseType: 'json'
// });


export default function configStore(preloadState = {}) {
  // const enhancer = compose(
  //   applyMiddleware(
  //     thunkMiddleware,
  //     loggerMiddleware,
  //     axiosMiddleware(client)
  //   ),
  //   devTools({ realtime: true })
  // );

  const store = createStore(
    rootReducer,
    preloadState
  );
  return store;
}
