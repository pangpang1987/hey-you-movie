// import { createStore as _createStore, applyMiddleware, compose } from 'redux';
//
// import promiseMiddleware from 'redux-promise-middleware';
// import thunk from 'redux-thunk';
//
// const createStore = (initialState = {}) => {
//   // ======================================================
//   // Middleware Configuration
//   // ======================================================
//   const middleware = [thunk, promiseMiddleware()];
//
//   // ======================================================
//   // Store Enhancers
//   // ======================================================
//   const enhancers = []
//   let composeEnhancers = compose;
//   // if we have redux devtools installed hook into it.
//   if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
//     composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
//   }
//
//   const store = _createStore(initialState, composeEnhancers(applyMiddleware(...middleware), ...enhancers));
//
//   store.asyncReducers = {};
//
//   if (module.hot) {
//     module.hot.accept('./reducers', () => {
//       const reducers = require('./reducers').default
//       store.replaceReducer(reducers(store.asyncReducers))
//     })
//   }
//
//   return store
//
// };
//
// export default createStore;

import { createStore as _createStore, applyMiddleware } from 'redux';

import Registry from './registry/registry';
import registryMiddleware from './registry/middleware';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import search from '../pages/HomePage/module/reducer';

const baseReducers = {
  search
};

export default function createStore(initialState = {}) {
  const registry = new Registry(baseReducers);
  let finalCreateStore = applyMiddleware(registryMiddleware(registry), thunk, promiseMiddleware());

  // if we have redux devtools installed hook into it.
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    finalCreateStore = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(finalCreateStore);
  }

  const store = finalCreateStore(_createStore)(registry.initialReducers, initialState);

  registry.store = store;

  return store;
}
