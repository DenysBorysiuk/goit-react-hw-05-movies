import { Link, useLocation } from 'react-router-dom';
import { List, Item, Thumb } from './MovieList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, poster_path, title }) => (
        <Item key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <Thumb>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
              />
            </Thumb>
            <p>{title}</p>
          </Link>
        </Item>
      ))}
    </List>
  );
};
