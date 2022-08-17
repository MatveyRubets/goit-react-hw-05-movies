import { Link } from 'react-router-dom';
import React from 'react';

const Navigation = () => {
  return (
    <nav
      style={{
        padding: '10px 0px 0px 10px',
        fontSize: '22px',
      }}
    >
      <Link style={{ marginRight: '10px', textDecoration: 'none' }} to="/">
        Home
      </Link>
      <Link style={{ textDecoration: 'none' }} to="movies">
        Movies
      </Link>
    </nav>
  );
};

export default Navigation;
