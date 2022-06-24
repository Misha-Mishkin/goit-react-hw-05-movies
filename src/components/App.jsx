import {  Route } from 'react-router-dom';
import AppBar from './AppBar';
import Container from './Container';
// import Cast from './Pages/Cast';
import Home from './Pages/Home';
// import MovieDetails from './Pages/MovieDetails';
import Movies from './Pages/Movies';
// import Reviews from './Pages/Reviews';
import NotFoundViews from './Pages/NotFoundViews';

export const App = () => {
  return (
    <Container>
      <AppBar />

      {/* <Switch> */}
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/movies">
          <Movies />
        </Route>

        <Route>
          <NotFoundViews />
        </Route>
      {/* </Switch> */}
    </Container>
  );
};
