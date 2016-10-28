import { fromJS } from 'immutable';
import { FETCH_ALL, START, SUCCESS, FAIL } from '../actions';
//import { LOCATION_CHANGE } from 'react-router-redux';

const defaultState = fromJS({
  page: 1,
  items: [],
  totalPages: 0,
  loading: false
});

export default function(movies = defaultState, action) {

  switch (action.type) {

    case FETCH_ALL + START:
      return movies.set('loading', true);

    case FETCH_ALL + SUCCESS:

      console.log(action);
      //return movies.set('items');

      //return { ...state, items: action.payload.data.results, totalPages: action.payload.data.total_pages };
      return Object.assign({}, movies, {
        items: action.payload.data.results,
        totalPages: action.payload.data.total_pages,
        page: action.payload.data.page
      });
    /*case LOCATION_CHANGE:
      if (action.payload.action === 'REPLACE') {
        return state;
      }
      return Object.assign({}, state, {
        items: [],
        totalPages: 1,
        page: 1
      });*/
      case FETCH_ALL + FAIL:

  }

  return movies;
}
