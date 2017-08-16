import { combineReducers } from 'redux';

import { STORE_INJECT } from './middleware';

export function injectReducer(reducers) {
  return { [STORE_INJECT]: { reducers } };
}

export default class Registry {
  constructor(baseReducers) {
    this._reducers = baseReducers;
  }
  store = null;
  injectReducers(reducers) {
    Object.assign(
      this._reducers,
      reducers.reduce((acc, reducer) => {
        acc[reducer.reducer] = reducer;
        return acc;
      }, {})
    );
    this.store.replaceReducer(combineReducers(this._reducers));
  }

  get initialReducers() {
    return combineReducers(this._reducers);
  }
}
