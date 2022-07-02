import { useState, useEffect } from 'react';
import { fetchMovieCredits } from '../services/API';
import { useParams } from 'react-router-dom';
import CastRender from 'components/CastRender';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieCredits(movieId).then(res => {
      setCast(res.data.cast);
    });
  }, [movieId]);

  return <>{cast && <CastRender cast={cast} />}</>;
}
