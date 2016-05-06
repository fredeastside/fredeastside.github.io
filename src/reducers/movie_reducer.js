import { FETCH_MOVIE, ROUTER_CHANGE } from '../actions';

export default function(state = {}, action) {

  switch (action.type) {
    case FETCH_MOVIE:
      return Object.assign({}, state, action.payload.data);
    case ROUTER_CHANGE:
      return {};
  }

  return state;
}
