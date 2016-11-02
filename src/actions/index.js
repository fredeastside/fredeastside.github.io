import axios from 'axios';
import promiseMiddleware from 'redux-promise';

import {
  FETCH_ALL,
  FETCH_BY_ID,
  START,
  SUCCESS,
  FAIL,
  CHANGE_LANGUAGE
} from '../constants';
import language from '../utils/language';

const API_KEY = '8e32027b616e193a9ea9248c756e103f';
const API_URL = 'http://api.themoviedb.org/3';

export function fetchMovies(method = 'now_playing', page = 1, query = false) {
  return (dispatch, store) => {

    dispatch({
      type: FETCH_ALL + START
    });

    method = (method !== 'search') ? `movie/${method}` : `${method}/movie`;

    axios
      .get(`${API_URL}/${method}?api_key=${API_KEY}&page=${page}&query=${query}&language=${language.get()}`)
      .then(response => dispatch({
        type: FETCH_ALL + SUCCESS,
        payload: response.data
      }))
      .catch(response => dispatch({
        type: FETCH_ALL + FAIL
      }));

  }
}

export function fetchMovieById(id) {
  return (dispatch, store) => {

    dispatch({
      type: FETCH_BY_ID + START
    });

    axios
      .get(`${API_URL}/movie/${id}?api_key=${API_KEY}&language=${language.get()}`)
      .then(response => dispatch({
        type: FETCH_BY_ID + SUCCESS,
        payload: response.data
      }))
      .catch(response => dispatch({
        type: FETCH_BY_ID + FAIL
      }));

  };
}

export function changeLanguage(lang) {
  language.set(lang);

  return (dispatch, store) => dispatch({
    type: CHANGE_LANGUAGE,
    payload: lang
  });
}
