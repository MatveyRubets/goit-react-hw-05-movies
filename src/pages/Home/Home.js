import { useEffect, useState } from 'react';
import { getPopularMovies } from 'api/moviesApi';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getPopularMovies().then(res => setPopularMovies(res.results));
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      {popularMovies && (
        <ul>
          {popularMovies.map(popularMovie => {
            return (
              <li key={popularMovie.id}>
                <Link
                  to={`/movies/${popularMovie.id}`}
                  state={{ from: location }}
                >
                  {popularMovie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Home;
