import { useParams, Outlet, useSearchParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';

export const MovieDetails = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  const movie = getMovieDetails(id);
  return (
    <main>
      <div>
        <img src={movie.url} alt="" />
        <div>
          <h2>
            Product - {movie.name} - {id}
          </h2>
          <p>User Score:</p>
          <h3>Overview</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <h3>Geners</h3>
          <p>Lorem ipsum dolor .</p>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <Outlet />
      </div>
    </main>
  );
};
