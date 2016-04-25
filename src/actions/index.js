import axios from 'axios';

const API_KEY = '8e32027b616e193a9ea9248c756e103f';
const API_LANGUAGE = 'ru';
const API_URL = 'http://api.themoviedb.org/3';

export const FETCH_MOVIES = 'FETCH_MOVIES';

export function fetchMovies(page) {

  const url = `${API_URL}/movie/now_playing?api_key=${API_KEY}&language=${API_LANGUAGE}`;
  const request = axios.get(url);

  return {
    type: FETCH_MOVIES,
    payload: request
  };
}
