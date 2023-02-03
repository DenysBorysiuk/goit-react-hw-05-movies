import axios from 'axios';

const API_KEY = 'b60c32a6f6f2663f6a35c755ff35b4cc';
// const BASE_URL = 'https://api.themoviedb.org/3';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};
//   async getFilmsDetails() {
//     const url = `${BASE_URL}/movie/${this.id}?api_key=${API_KEY}&language=en-US`;
//     return await axios.get(url);
//   }

//   const response = await axios.get(`https://pixabay.com/api/`, {
//     params: {
//       key: '31604324-7a50cb95f9ef385a3991a2501',
//       q: searchQuery,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       page: page,
//       per_page: 12,
//       safesearch: true,
//     },
//   });
//   return response.data;
// };
