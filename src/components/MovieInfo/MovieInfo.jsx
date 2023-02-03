import { Wrapper } from './MovieInfo.styled';

export const MovieInfo = ({ movie }) => (
  <div>
    {console.log(movie)}
    <button type="button">&#8592; Go Back</button>
    <Wrapper>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
      <div>
        <h2>
          {movie.original_title} ({movie.release_date.slice(0, 4)})
        </h2>
        <p>User Score: {movie.vote_average}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{movie.genres.map(gener => gener.name)}</p>
      </div>
    </Wrapper>
  </div>
);
