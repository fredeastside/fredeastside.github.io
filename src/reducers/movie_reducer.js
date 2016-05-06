import { FETCH_MOVIE } from '../actions';
import { LOCATION_CHANGE } from 'react-router-redux';

export default function(state = {}, action) {

  switch (action.type) {
    case FETCH_MOVIE:
      return Object.assign({}, state, action.payload.data);
    case LOCATION_CHANGE:
      return {};
  }

  return state;
}
