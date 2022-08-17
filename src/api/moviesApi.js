import axios from 'axios';

const API_KEY = '2951025ecfa7eb766855c73351b1b83e';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
  const res = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );

  if (res.status !== 200) {
    throw new Error('Nothing Found 🤷');
  }

  return res.data;
};

export const getSearchMovies = async name => {
  const res = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&page=1&query=${name}`
  );

  if (res.status !== 200) {
    throw new Error('Nothing Found 🤷');
  }

  return res.data;
};

export const getMovieDetails = async movieId => {
  const res = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );

  if (res.status !== 200) {
    throw new Error('Nothing Found 🤷');
  }

  return res.data;
};

export const getMovieCast = async movieID => {
  const res = await axios.get(
    `${BASE_URL}/movie/${movieID}/credits?api_key=${API_KEY}`
  );

  if (res.status !== 200) {
    throw new Error('Nothing Found 🤷');
  }

  return res.data;
};

export const getMovieReviews = async movieId => {
  const res = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );

  if (res.status !== 200) {
    throw new Error('Nothing Found 🤷');
  }

  return res.data;
};
