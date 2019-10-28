import React from 'react';
import ReactDOM from 'react-dom';
import 'es6-object-assign/auto';
import App from './App';
import './scss/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);