import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MoviesDetails from 'pages/MoviesDetails/MoviesDetails';

export const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieid" element={<MoviesDetails />}></Route>
      </Routes>
    </Router>
  );
};
