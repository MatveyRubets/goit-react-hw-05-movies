import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '34dbf9d1a3fd74b10bf7ab9eec59866f',
    language: 'en-US',
  },
});

export const getPopularMovies = async () => {
  const res = await instance('trending/movie/day');

  if (res.status !== 200) {
    throw new Error('Nothing Found 🤷');
  }

  return res.data;
};

export const getSearchMovies = async name => {
  const res = await instance(`/search/movie?/&page=1&query=${name}`);

  if (res.status !== 200) {
    throw new Error('Nothing Found 🤷');
  }

  return res.data;
};

export const getMovieDetails = async movieId => {
  const res = await instance(`/movie/${movieId}`);

  if (res.status !== 200) {
    throw new Error('Nothing Found 🤷');
  }

  return res.data;
};

export const getMovieCast = async movieId => {
  const res = await instance(`/movie/${movieId}/credits`);

  if (res.status !== 200) {
    throw new Error('Nothing Found 🤷');
  }

  return res.data;
};

export const getMovieReviews = async movieId => {
  const res = await instance(`/movie/${movieId}/reviews`);

  if (res.status !== 200) {
    throw new Error('Nothing Found 🤷');
  }

  return res.data;
};
