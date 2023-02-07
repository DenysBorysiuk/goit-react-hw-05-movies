import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b60c32a6f6f2663f6a35c755ff35b4cc';

export const getTrendingMovies = async signal => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
    params: {
      api_key: API_KEY,
    },
    signal,
  });
  return response.data;
};

export const getMovieDetails = async (movieId, signal) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
    signal,
  });
  return response.data;
};

export const searchMovie = async (query, signal) => {
  const response = await axios.get(
    `http://api.themoviedb.org/3/search/movie/`,
    {
      params: {
        api_key: API_KEY,
        query,
      },
      signal,
    }
  );
  return response.data;
};

export const getMovieCredits = async (movieId, signal) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
    signal,
  });
  return response.data;
};

export const getMovieReviews = async (movieId, signal) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
    signal,
  });
  return response.data;
};
