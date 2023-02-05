import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
// import { List, Item, Thumb } from './Cast.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchData = async () => {
      try {
        const movieReviews = await getMovieReviews(movieId);
        setReviews(movieReviews.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [movieId]);

  return reviews?.length > 0 ? (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h2>Author: {author}</h2>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>We don`t have reviews for this movie</p>
  );
};

export default Reviews;
