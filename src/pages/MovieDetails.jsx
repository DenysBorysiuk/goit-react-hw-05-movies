import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieDetails = await getMovieDetails(movieId);
        setMovie(movieDetails);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <main>
      {movie && <MovieInfo movie={movie} />}
      <div>
        <p>Additional information</p>
        <Outlet />
      </div>
    </main>
  );
};
