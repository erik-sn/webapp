import { mount, shallow } from "enzyme";
import jsdom from "jsdom";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "../src/reducers";

export function sRender(ComponentClass: React.ComponentClass, props = {}, state = {}) {
  return shallow(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );
}

export function fRender(ComponentClass: React.ComponentClass, props = {}, state = {}) {
  return mount(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );
}

interface IDictionary<T> { [key: string]: T; }

function storageMock() {

  const storage: IDictionary<any> = {};

  return {
    setItem(key: string, value: any) {
      storage[key] = value || "";
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
    key(i: string) {
      const keys = Object.keys(storage);
      return keys[i] || null;
    },
  };
}


global.document = jsdom.jsdom("<!doctype html><html><body></body></html>");
global.window = global.document.defaultView;

global.navigator = {
  userAgent: "node.js",
};

global.window.localStorage = storageMock();
global.window.sessionStorage = storageMock();
