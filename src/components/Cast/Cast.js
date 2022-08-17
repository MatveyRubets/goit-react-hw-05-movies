import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/moviesApi';
import PropTypes from 'prop-types';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieid } = useParams();

  const defaultImage =
    'https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?b=1&k=20&m=1216251206&s=170667a&w=0&h=z0hxu_BaI_tuMjMneE_APbnx_-R2KGPXgDjdwLw5W7o=';

  useEffect(() => {
    getMovieCast(movieid).then(movie => setMovieCast(movie.cast));
  }, [movieid]);

  return movieCast && movieCast.length === 0 ? (
    <p>There is no cast information 🤷🏻</p>
  ) : (
    <ul>
      {movieCast.map(({ id, profile_path, original_name, name, character }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200${profile_path}`
                : defaultImage
            }
            alt={original_name}
          />
          <h3>{name}</h3>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

Cast.propTypes = {
  movieCast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string.isRequired,
      original_name: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};

export default Cast;
