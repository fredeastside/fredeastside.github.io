import { FETCH_BY_ID, START, SUCCESS, FAIL, CHANGE_LANGUAGE } from '../constants';
import { fromJS } from 'immutable';

import language from '../utils/language';

const defaultState = fromJS({
  language: language.get(),
  loading: false,
  entity: {}
});

export default function(movie = defaultState, action) {
  switch (action.type) {

    case FETCH_BY_ID + START:
      return movie.set('loading', true);

    case FETCH_BY_ID + SUCCESS:
      return movie
        .set('loading', false)
        .set('entity', action.payload);

    case FETCH_BY_ID + FAIL:
      return movie.set('loading', false);

    case CHANGE_LANGUAGE:
      return movie.set('language', action.payload);
  }

  return movie;
}
