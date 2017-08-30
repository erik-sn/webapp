import chai from 'chai';  // eslint-disable-line no-unused-vars
import { JSDOM } from 'jsdom';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import reducers from '../src/reducers/root_reducer';

// jsdom configuration
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const window = jsdom.window;
global.window = window;
global.document = window.document;
global.navigator = { userAgent: 'node.js' };
global.HTMLElement = global.window.HTMLElement;

// necessary for promise resolution
const createStoreWithMiddleware = applyMiddleware()(createStore);
export const store = createStoreWithMiddleware(reducers);

export function reduxWrap(component) {
  return (
    <Provider store={store}>
      {component}
    </Provider>
  );
}
