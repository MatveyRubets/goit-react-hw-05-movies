import { Notify } from 'notiflix';
import { BiSearchAlt } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import { getSearchMovies } from 'api/moviesApi';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();

    const value = e.target.elements.query.value.toLowerCase();
    const valueInput = e.currentTarget;

    setSearchParams({ query: value });
    valueInput.reset();

    if (value.trim() === '') {
      Notify.failure(
        'Please,check the correct spelling of the movie title and try again'
      );
      return;
    }
  };

  useEffect(() => {
    query && getSearchMovies(query).then(movie => setSearchMovie(movie));
  }, [query]);

  return (
    <div>
      <h1>Search for Any Movie You Want</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input name="query" type="text" />
          <button type="submit">
            <span>
              <BiSearchAlt />
            </span>
          </button>
        </label>
      </form>
      <ul>
        {searchMovie &&
          searchMovie.results.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        {searchMovie &&
          searchMovie.total_results === 0 &&
          Notify.warning('There are no movies matching your query!')}
      </ul>
    </div>
  );
};

export default Movies;
