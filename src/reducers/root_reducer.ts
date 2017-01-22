import { combineReducers } from 'redux-immutable';

import RouteReducer from './route_reducer';

const rootReducer = combineReducers({
  routing: RouteReducer,
});

export default rootReducer;
