import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../services/API';

export default function Home() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    API.fetchMoviesTrending().then(res => {
      setMovies(res.data.results);
    });
  }, []);

  return (
    <>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
