import * as React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import * as thunk from 'redux-thunk';

import reducers from './reducers/index';
import router from './routes';

const createStoreWithMiddleware = applyMiddleware(thunk.default)(createStore);

// require all .scss files for deploy if we are not server rendering
if (process.env.BROWSER) {
  const requireAll = (r: any) => r.keys().forEach(r);
  requireAll(require.context('./sass/', true, /\.scss$/));
}


// configure redux dev tools
declare const window: any; // make typescript happy
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
                                                  window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory}>{router}</Router>
  </Provider>
);

export default App;
