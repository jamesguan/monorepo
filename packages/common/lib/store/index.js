import { useMemo } from 'react';
import thunk from 'redux-thunk';

import selectPlugin from '@rematch/select';

import { init } from '@rematch/core';

import user from './models/user';

let store;

export const initStore = (initialState) => {
  store = init({
    models: {
      user,
    },
    plugins: [selectPlugin()],
    redux: {
      devToolOptions: {
        disabled: process.env.NODE_ENV === 'production',
      },
      initialState,
      middlewares: [thunk],
      reducers: {},
    },
  });
  selectors.select = store.select;
  return store;
};

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
    selectors.select = () => {};
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) {
    store = _store;
    selectors.select = store.select;
  }

  return _store;
};

export const selectors = {
  select: () => {},
};

export const useStore = (initialState) => {
  store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
};