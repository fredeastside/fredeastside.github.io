import { FETCH_MOVIES } from '../actions';

export default function(state = { page: 1 }, action) {

  switch (action.type) {
    case FETCH_MOVIES:
      //return { ...state, items: action.payload.data.results, totalPages: action.payload.data.total_pages };
      return Object.assign({}, state, {
        items: action.payload.data.results,
        totalPages: action.payload.data.total_pages,
        page: action.payload.data.page
      });
  }

  return state;
}
