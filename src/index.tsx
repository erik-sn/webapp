import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import { applyMiddleware, createStore } from "redux";
import * as thunk from "redux-thunk";

import reducers from "./reducers/index.tsx";
import router from "./routes.tsx";

const createStoreWithMiddleware = applyMiddleware(thunk.default)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>{router}</Router>
  </Provider>,
document.getElementById("react-container"));
