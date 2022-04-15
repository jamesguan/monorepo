
import { createSelector } from 'reselect';

export const getValueFromSelector = selector => createSelector(
  selector,
  value => value,
);

export const  getSelector = getValueFromSelector((state, name) => state?.[name]);

export const extendSelectorWithNamespace = selector => (state, name) => (name ? getSelector(selector(state), name) : selector(state));
export const createSliceSelector = sliceName => extendSelectorWithNamespace(state => getSelector(state, sliceName));
export const getValueAtPath = objectPath => getValueFromSelector(createSliceSelector(objectPath));