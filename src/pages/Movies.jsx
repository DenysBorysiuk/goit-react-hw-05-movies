import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { searchMovie } from 'services/api';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;

    const fetchData = async () => {
      try {
        const movies = await searchMovie(query);
        setMovies(movies.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [query]);

  const updateQueryString = queryString => {
    setSearchParams({ query: queryString });
  };

  return (
    <main>
      <SearchBox updateQueryString={updateQueryString} />
      <MoviesList movies={movies} />
    </main>
  );
};
