import axios from 'axios';
import promiseMiddleware from 'redux-promise';

import { FETCH_ALL, START, SUCCESS, FAIL } from '../constants';

const API_KEY = '8e32027b616e193a9ea9248c756e103f';
const API_LANGUAGE = localStorage.getItem('language') || 'ru';
const API_URL = 'http://api.themoviedb.org/3';


export function fetchMovies() {
  return (dispatch, store) => {
    dispatch({
      type: FETCH_ALL + START
    });

    axios
      .get(
        
      )
      .then()
      .catch();

  }
}


/*export function fetchMovies() {
  let  API_LANGUAGE = localStorage.getItem('language') ?
                      localStorage.getItem('language') : 'ru';
  page = parseInt(page);

  apiAction = apiAction === 'search' ? `/${apiAction}/movie`
              : `/movie/${apiAction}`;

  let url = `${API_URL}now_playing?api_key=${API_KEY}&language=ru`;

  url = query ? url + `&query=${query}` : url;
  url = page ? url + `&page=${page}` : url;


  return {
    type: FETCH_MOVIES,
    payload: axios.get(url)
  };
}*/

export function fetchMovie(movieId) {
  let  API_LANGUAGE = localStorage.getItem('language') ?
                      localStorage.getItem('language') : 'ru';
  let url = `${API_URL}/movie/${parseInt(movieId)}?api_key=${API_KEY}&language=${API_LANGUAGE}`;

  return {
    type: FETCH_MOVIE,
    payload: axios.get(url)
  };
}

export function changeLanguage(language) {
  return {
      type: CHANGE_LANGUAGE,
      payload: language
  };
}
