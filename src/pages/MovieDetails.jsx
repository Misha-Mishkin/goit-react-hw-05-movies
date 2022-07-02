import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMovieDetails } from '../services/API';
import MoviePublic from 'components/MovieRender';
import Cast from './Cast';
import Reviews from './Reviews';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(res => {
      setItem(res.data);
    });
  }, [movieId]);

  return (
    <>
      <Link to="/"> 👈 Go back</Link>
      {item && <MoviePublic item={item} />}
      <hr />
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr />
    </>
  );
}
