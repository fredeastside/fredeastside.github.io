import { combineReducers } from 'redux';
import MovieReducer from './movie_reducer';

export default combineReducers({
  response: MovieReducer
});
