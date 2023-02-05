import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovieCredits } from 'services/api';
import { List, Item, Thumb, Wrapper, Title, SubTitle } from './Cast.styled';

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
        {cast.map(({ cast_id, name, character, profile_path }) => (
          <Item key={cast_id}>
            <Thumb>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : `https://via.placeholder.com/150x150.png?text=No+photo`
                }
                alt={name}
              />
            </Thumb>
            <Wrapper>
              <Title>{name}</Title>
              <SubTitle>{character}</SubTitle>
            </Wrapper>
          </Item>
        ))}
      </List>
    )
  );
};

export default Cast;

Cast.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.string,
      name: PropTypes.string,
      character: PropTypes.string,
      profile_path: PropTypes.string,
    })
  ),
};
