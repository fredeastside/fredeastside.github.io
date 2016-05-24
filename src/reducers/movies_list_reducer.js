import { FETCH_MOVIES } from '../actions';
import { LOCATION_CHANGE } from 'react-router-redux';

export default function(state = { page: 1 }, action) {

  switch (action.type) {
    case FETCH_MOVIES:
      //return { ...state, items: action.payload.data.results, totalPages: action.payload.data.total_pages };
      return Object.assign({}, state, {
        items: action.payload.data.results,
        totalPages: action.payload.data.total_pages,
          page: action.payload.data.page,
	  url:action.url
      });
    case LOCATION_CHANGE:
      if (action.payload.action === 'REPLACE') {
        return state;
      }
      return Object.assign({}, state, {
        items: [],
        totalPages: 1,
        page: 1
      });
  }

  return state;
}
