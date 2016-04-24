const API_KEY = '8e32027b616e193a9ea9248c756e103f';
const API_LANGUAGE = 'ru';
const API_URL = 'http://api.themoviedb.org/3';


export const FETCH_MOVIES = 'FETCH_MOVIES';
export function fetchMovies(movie) {
  return {
    type: FETCH_MOVIES
  };
}
