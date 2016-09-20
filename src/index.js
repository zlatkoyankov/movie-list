import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import Application from './components/application';
import initialState from './store/initialState';
import { loadMovies } from './actions/actions';

const store = configStore(initialState);
store.dispatch(loadMovies());


ReactDOM.render(
    <Provider store={store}>
      <Application />
    </Provider>,
  document.querySelector('#app')
);
