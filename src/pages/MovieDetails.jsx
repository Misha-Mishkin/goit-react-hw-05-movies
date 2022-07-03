import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../services/API';
import MoviePublic from 'components/MovieRender';
import Loader from 'components/Loader';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [item, setItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetails(movieId).then(res => {
      setItem(res.data);
    });
  }, [movieId]);

  const path = location?.state?.from ?? '/';

  const text = {
    paddingLeft: 20,
  };

  const button = {
    paddingLeft: 20,
  };

  return (
    <>
      <Link to={path} style={button}>
        <button>👈 Go back</button>
      </Link>
      {item && <MoviePublic item={item} />}
      <hr />
      <h3 style={text}>Additional information</h3>
      <ul>
        <li>
          <Link to="cast" state={{ from: path }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: path }}>
            Reviews
          </Link>
        </li>
      </ul>
      <hr />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
