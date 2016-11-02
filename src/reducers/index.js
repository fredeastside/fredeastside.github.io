import { combineReducers } from 'redux';
import MoviesListReducer from './movies_list_reducer';
import MovieReducer from './movie_reducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  routing: routerReducer,
  movies: MoviesListReducer,
  movie: MovieReducer
});
