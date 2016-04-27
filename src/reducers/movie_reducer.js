import { FETCH_MOVIES } from '../actions';

/*export default function(state = [], action) {

  switch (action.type) {
    case FETCH_MOVIES:
      return state.concat(action.payload.data.results);
  }

  return state;
}*/
export default function(state = {}, action) {

  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, items: action.payload.data.results, totalPages: action.payload.data.total_pages };
  }

  return state;
}
