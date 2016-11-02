import { fromJS } from 'immutable';
import { FETCH_ALL, START, SUCCESS, FAIL, CHANGE_LANGUAGE } from '../constants';
//import { LOCATION_CHANGE } from 'react-router-redux';

import language from '../utils/language';

const defaultState = fromJS({
  page: 1,
  items: [],
  totalPages: 0,
  total: 0,
  loading: false,
  language: language.get()
});

export default function(movies = defaultState, action) {

  switch (action.type) {

    case FETCH_ALL + START:
      return movies.set('loading', true);

    case FETCH_ALL + SUCCESS:
      const { page, total_pages, results, total_results } = action.payload;

      return movies
        .set('loading', false)
        .set('items', results)
        .set('totalPages', total_pages)
        .set('total', total_results)
        .set('page', page);

    case FETCH_ALL + FAIL:
      return movies.set('loading', false);

    case CHANGE_LANGUAGE:
      return movies.set('language', action.payload);

    /*case LOCATION_CHANGE:
      if (action.payload.action === 'REPLACE') {
        return state;
      }
      return Object.assign({}, state, {
        items: [],
        totalPages: 1,
        page: 1
      });*/
  }

  return movies;
}
