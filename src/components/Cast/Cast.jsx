import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/api';
import { List, Item, Thumb } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchData = async () => {
      try {
        const credits = await getMovieCredits(movieId);
        setCast(credits.cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    cast && (
      <List>
        {console.log(cast)}
        {cast.map(({ cast_id, name, character, profile_path }) => (
          <Item key={cast_id}>
            <Thumb>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
              />
            </Thumb>
            <h2>{name}</h2>
            <p>{character}</p>
          </Item>
        ))}
      </List>
    )
  );
};

export default Cast;
