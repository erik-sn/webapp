// tslint:disable:no-string-literal
import * as chai from 'chai';
import * as jsdom from 'jsdom';
import * as  React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import reducers from '../src/reducers/root_reducer';


class Dictionary<TValue> {
    [index: string]: TValue;
}

// jsdom configuration
declare const global: any;
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const window = doc.defaultView;
global['document'] = doc;
global['window'] = window;
global['window'].localStorage = storageMock();
global['navigator'] = {userAgent: 'node.js'};
global['HTMLElement'] = global['window'].HTMLElement;

// necessary for promise resolution
const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

export function reduxWrap(component: JSX.Element): JSX.Element {
  return (
    <Provider store={store}>
      {component}
    </Provider>
  );
}


function storageMock(): Object {
  const storage = new Dictionary();

  return {
    setItem(key: string, value: string) {
      storage[key] = value || '';
    },
    getItem(key: string) {
      return storage[key] || null;
    },
    removeItem(key: string) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key(i: number) {
      const keys = Object.keys(storage);
      return keys[i] || null;
    },
  };
}
