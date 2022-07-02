import { Routes, Route } from 'react-router-dom';
// import AppBar from './AppBar';
// import Container from './components/Container';
import Cast from './pages/Cast';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Movies from './pages/Movies';
import Reviews from './pages/Reviews';
// import NotFoundView from './pages/NotFoundView';
import Navigation from './components/Navigation';
// import AppBar from './components/AppBar';


export const App = () => {
  return (
    // <Container>
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        {/* <Route path="*" element={<Navigate to="/"/>} /> */}
      </Routes>
    </>
    // </Container>
  );
};