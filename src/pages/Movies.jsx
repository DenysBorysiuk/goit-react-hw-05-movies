import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { searchMovie } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const movies = await searchMovie(query, signal);
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
  }, [query]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox updateQueryString={updateQueryString} />
      <MoviesList movies={movies} />
    </main>
  );
};

export default Movies;
