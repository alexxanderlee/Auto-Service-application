import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store.js';
import App from './App';
import { ScrollToTop } from './components';
import { history } from './helpers';
import { fetchGetProfile } from './redux/actions/user';

store.dispatch(fetchGetProfile());

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <ScrollToTop />
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);