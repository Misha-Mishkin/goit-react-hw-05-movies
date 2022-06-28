import {Routes, Route } from 'react-router-dom';
// import AppBar from './AppBar';
import Container from './components/Container';
// import Cast from './Pages/Cast';
import Home from './pages/Home';
// import MovieDetails from './Pages/MovieDetails';
import Movies from './pages/Movies';
// import Reviews from './Pages/Reviews';
// import NotFoundView from './Pages/NotFoundView';
// import Navigation from './Navigation';
import AppBar from './components/AppBar';

export const App = () => {
  return (
    <Container>
      <AppBar/>
      {/* <Navigation /> */}
      <Routes>
      {/* <Switch> */}
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/movies">
        <Movies />
      </Route>
{/* 
      <Route path="/movies/:movieId">
        <MovieDetails />
      </Route>

      <Route path="/movies/:movieId/cast">
        <Cast />
      </Route>

      <Route path="/movies/:movieId/reviews">
        <Reviews />
      </Route> */}

      {/* <Route>
          <NotFoundView />
        </Route> */}
      {/* </Switch> */}
      </Routes>
    </Container>
  );
};


// const API = 'b610c698525bd18a195a4333e81be16d'
// const BASE_URL = `https://api.themoviedb.org/3/movie/76341?api_key=${API}`



// export function fetchTrending() {
//     return `${BASE_URL}/trending/get-trending`
// }


// console.log(fetchTrending());

// console.log(`https://api.themoviedb.org/3/trending/all/day?api_key=${API}`);