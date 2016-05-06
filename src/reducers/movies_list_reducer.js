import { FETCH_MOVIES, ROUTER_CHANGE } from '../actions';

export default function(state = { page: 1 }, action) {

  switch (action.type) {
    case FETCH_MOVIES:
      //return { ...state, items: action.payload.data.results, totalPages: action.payload.data.total_pages };
      return Object.assign({}, state, {
        items: action.payload.data.results,
        totalPages: action.payload.data.total_pages,
        page: action.payload.data.page
      });
    case ROUTER_CHANGE:
      return Object.assign({}, state, {
        items: [],
        totalPages: 1,
        page: 1
      });
  }

  return state;
}
