import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import routes from './routes';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
