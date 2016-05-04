import { combineReducers } from 'redux';
import MovieReducer from './movie_reducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  response: MovieReducer,
  routing: routerReducer
});
