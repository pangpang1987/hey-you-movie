import React from 'react';

import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import createStore from './store';
import ScrollToTop from './global/ScrollToTop';
import AppRouter from './router';

// Store Initialization
// ------------------------------------
const store = createStore(window.__INITIAL_STATE__);

const App = () => {
  return (<Provider store={store}>
    <AppRouter />
  </Provider>);
}


export default App;
