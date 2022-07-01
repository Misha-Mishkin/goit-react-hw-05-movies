import { useState, useEffect } from 'react';
import { fetchMoviesTrending } from '../services/API';
import HomeMovieRender from 'components/HomeMovieRender';

export default function Home() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchMoviesTrending().then(res => {
      setMovies(res.data.results);
    });
  }, []);

  return <>{movies && <HomeMovieRender movies={movies} />}</>;
}
