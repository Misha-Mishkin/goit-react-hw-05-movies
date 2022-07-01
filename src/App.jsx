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
// import { API } from './services/API.js'

// console.log(API);

export const App = () => {
  return (
    // <Container>
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
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

// const API = 'b610c698525bd18a195a4333e81be16d'
// const BASE_URL = `https://api.themoviedb.org/3/movie/76341?api_key=${API}`

// export function fetchTrending() {
//     return `${BASE_URL}/trending/get-trending`
// }

// console.log(fetchTrending());

// console.log(`https://api.themoviedb.org/3/trending/all/day?api_key=${API}`);
