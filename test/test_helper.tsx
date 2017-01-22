import { mount, shallow } from "enzyme";
import * as jsdom from "jsdom";
import * as  React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "../src/reducers/";

declare const global: any;
const doc = jsdom.jsdom("<!doctype html><html><body></body></html>");
const win = doc.defaultView;
// win.localStorage = storageMock();
global["document"] = doc;
global["window"] = win;
global["navigator"] = {userAgent: "node.js"};
global["HTMLElement"] = global["window"].HTMLElement;


export function sRender(ComponentClass: any, props = {}, state= {}, store= {}) {
  return shallow(<ComponentClass {...props} store={store} />);
}

export function fRender(ComponentClass: any, props = {}, state = {}) {
  return mount(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );
}

class Dictionary<TValue> {
    [index: string]: TValue;
}

function storageMock() {
  const storage = new Dictionary();

  return {
    setItem(key: string, value: string) {
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
    key(i: number) {
      const keys = Object.keys(storage);
      return keys[i] || null;
    },
  };
}
