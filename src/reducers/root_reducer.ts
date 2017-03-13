import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  router: routerReducer,
});

export default rootReducer;
