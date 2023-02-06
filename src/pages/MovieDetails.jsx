import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { BackLink } from 'components/BackLink/BackLink';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const ref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const movieDetails = await getMovieDetails(movieId, signal);
        setMovie(movieDetails);
      } catch (error) {
        if (error.name === 'CanceledError') return;
        console.log(error);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <main>
      <BackLink to={ref.current}>Back to products</BackLink>
      {/* <Link to={ref.current}>&#8592; Go Back</Link> */}
      {movie && <MovieInfo movie={movie} />}
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
