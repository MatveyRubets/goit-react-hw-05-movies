import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api/moviesApi';
import PropTypes from 'prop-types';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const { movieid } = useParams();

  useEffect(() => {
    getMovieReviews(movieid).then(setMovieReviews);
  }, [movieid]);

  return movieReviews && movieReviews.total_results === 0 ? (
    <p>There is no review information 🤷🏻</p>
  ) : (
    <ul>
      {movieReviews &&
        movieReviews.results.map(({ id, author, content }) => (
          <li key={id}>
            <strong>Author: {author}</strong>
            <p>{content}</p>
          </li>
        ))}
    </ul>
  );
};

Reviews.propTypes = {
  movieReviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default Reviews;
