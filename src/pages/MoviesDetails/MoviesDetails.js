import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'api/moviesApi';
import style from './MoviesDetails.module.css';

const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { movieid } = useParams();
  const location = useLocation();

  const {
    genres,
    id,
    title,
    vote_average,
    overview,
    poster_path,
    original_title,
    release_date,
  } = movieDetails;

  useEffect(() => {
    getMovieDetails(movieid).then(movie => setMovieDetails(movie));
  }, [movieid]);

  return (
    <div className={style.movieDescription}>
      <img
        src={poster_path && `https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={original_title}
      />
      <h1 className={style.originalTitle}>
        {original_title} ({release_date?.slice(0, 4)})
      </h1>
      <p className={style.userScore}>
        User Score: {Math.round(vote_average * 10)}%
      </p>
      <h2 className={style.detailsTitle}>Overview</h2>
      <p className={style.detailsText}>{overview}</p>
      <h2 className={style.detailsTitle}>Genres</h2>
      <p className={style.detailsText}>
        {genres?.map(genre => genre.name).join(' / ')}
      </p>
    </div>
  );
};

export default MoviesDetails;
