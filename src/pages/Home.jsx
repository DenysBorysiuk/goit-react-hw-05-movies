import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getTrendingMovies } from 'services/api';

export const Home = () => {
  //   const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        //   setIsLoading(true);
        const movies = await getTrendingMovies();
        console.log(movies.results);
        setMovies(movies.results);
      } catch (error) {
        //   toast.error('Oops, something went wrong');
        //   console.log(error);
      } finally {
        //   setIsLoading(false);
      }
    };

    getMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {console.log(movies)}
      <MoviesList movies={movies} />
    </main>
  );
};

// const searchImages = async () => {
//   try {
//     setIsLoading(true);
//     const images = await getImages(query, page);
//   } catch (error) {
//     toast.error('Oops, something went wrong');
//   } finally {
//     setIsLoading(false);
//   }
// };
