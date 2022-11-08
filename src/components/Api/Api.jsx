import axios from 'axios';

const API_OPTIONS = {
  BASE_URL: 'https://api.themoviedb.org/3',
  MEDIA_TYPE: 'all',
  TIME_WINDOW: 'day',
  API_KEY: 'f83569bc70af6d7ff67cd4d249eebe13',
};

async function fetchTrending() {
  const { BASE_URL, API_KEY, MEDIA_TYPE, TIME_WINDOW } = API_OPTIONS;

  const response = await axios.get(
    `${BASE_URL}/trending/${MEDIA_TYPE}/${TIME_WINDOW}?api_key=${API_KEY}`
  );
  return response.data.results;
}

async function fetchMovie(movieId) {
  const { BASE_URL, API_KEY } = API_OPTIONS;

  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  return response.data;
}

async function fetchMovieByQuery(query) {
  const { BASE_URL, API_KEY } = API_OPTIONS;

  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`
  );
  return response.data.results;
}

async function FetchMovieCast(movieId) {
  const { BASE_URL, API_KEY } = API_OPTIONS;

  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );

  return response.data.cast;
}

async function FetchMovieReviews(movieId) {
  const { BASE_URL, API_KEY } = API_OPTIONS;

  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&page=1`
  );

  return response.data.results;
}

export {
  fetchTrending,
  fetchMovie,
  FetchMovieCast,
  fetchMovieByQuery,
  FetchMovieReviews,
};
