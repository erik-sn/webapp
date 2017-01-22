import * as React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import * as thunk from 'redux-thunk';

import reducers from './reducers/root_reducer';
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

// add enhanced history configuration where nav events are synced to redux store
// this uses the immutablejs implementation
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState(state) {
    return state.get('routing').toJS();
  },
});

const App = () => (
  <Provider store={store}>
    <Router history={history}>{router}</Router>
  </Provider>
);

export default App;
