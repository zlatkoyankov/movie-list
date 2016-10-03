import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import Application from './components/application';
import initialState from './store/initialState';
import { loadMovies } from './actions/actions';
import { saveToStore, restoreFromStore } from './utils/localStoreAPI';

let localState = restoreFromStore();

const store = configStore(localState);
if (localState === initialState) {
  store.dispatch(loadMovies());
}


store.subscribe(() => {
  const state = store.getState();
  saveToStore(state);
});

ReactDOM.render(
    <Provider store={store}>
      <Application />
    </Provider>,
  document.querySelector('#app')
);
