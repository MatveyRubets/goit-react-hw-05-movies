import { Link } from 'react-router-dom';
import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="movies">Movies</Link>
    </nav>
  );
};

export default Navigation;
