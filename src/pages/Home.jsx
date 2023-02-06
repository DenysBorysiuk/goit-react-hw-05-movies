import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getTrendingMovies } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const movies = await getTrendingMovies(signal);
        setMovies(movies.results);
      } catch (error) {
        if (error.name === 'CanceledError') return;
        console.log(error);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
