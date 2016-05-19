import axios from 'axios';

const API_KEY = '8e32027b616e193a9ea9248c756e103f';
const API_LANGUAGE = localStorage.getItem('language') ?
                      localStorage.getItem('language') : 'ru';
const API_URL = 'http://api.themoviedb.org/3';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export function fetchMovies(apiAction, page, query) {

  page = parseInt(page);

  apiAction = apiAction === 'search' ? `/${apiAction}/movie`
              : `/movie/${apiAction}`;

  let url = `${API_URL}${apiAction}?api_key=${API_KEY}&language=${API_LANGUAGE}`;

  url = query ? url + `&query=${query}` : url;
  url = page ? url + `&page=${page}` : url;

  return {
    type: FETCH_MOVIES,
    payload: axios.get(url)
  };
}

export function fetchMovie(movieId) {

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
