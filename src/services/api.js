import axios from 'axios';

const API_KEY = 'b60c32a6f6f2663f6a35c755ff35b4cc';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const searchMovie = async query => {
  const response = await axios.get(`/search/movie/`, {
    params: {
      api_key: API_KEY,
      query: query,
    },
  });
  return response.data;
};

export const getMovieCredits = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};
