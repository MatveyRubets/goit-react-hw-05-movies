import { useEffect, useState } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'api/moviesApi';
import { BiArrowBack } from 'react-icons/bi';
import PropTypes from 'prop-types';

const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { movieid } = useParams();
  const location = useLocation();

  const defaultImage =
    'https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?b=1&k=20&m=1216251206&s=170667a&w=0&h=z0hxu_BaI_tuMjMneE_APbnx_-R2KGPXgDjdwLw5W7o=';

  const {
    genres,
    vote_average,
    overview,
    poster_path,
    original_title,
    release_date,
  } = movieDetails;

  const getBackLink = location.state ? location.state.form : '/';

  useEffect(() => {
    getMovieDetails(movieid).then(movie => setMovieDetails(movie));
  }, [movieid]);

  return (
    <div>
      <Link to="/">
        <button type="button">
          <span>
            <BiArrowBack />
          </span>
          GO BACK
        </button>
      </Link>

      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImage
          }
          alt={original_title}
        />
        <h1>
          {original_title} ({release_date?.slice(0, 4)})
        </h1>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genres?.map(genre => genre.name).join(' / ')}</p>
      </div>

      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast" state={{ from: getBackLink }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: getBackLink }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

MoviesDetails.propTypes = {
  movieDetails: PropTypes.arrayOf(
    PropTypes.shape({
      original_title: PropTypes.string.isRequired,
      genres: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      release_date: PropTypes.number.isRequired,
      vote_average: PropTypes.number.isRequired,
    })
  ),
};

export default MoviesDetails;
