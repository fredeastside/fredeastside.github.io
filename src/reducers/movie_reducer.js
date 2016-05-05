import { FETCH_MOVIE } from '../actions';

export default function(state = {}, action) {

  switch (action.type) {
    case FETCH_MOVIE:
      return Object.assign({}, state, action.payload.data);
  }

  return state;
}
