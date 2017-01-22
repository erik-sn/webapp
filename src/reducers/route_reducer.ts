import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

export const initialState = fromJS({
  locationBeforeTransitions: null,
});

export default (state = initialState, action: any) => {
  if (action.type === LOCATION_CHANGE) {
    return state.merge({
      locationBeforeTransitions: action.payload,
    });
  }
  return state;
};
