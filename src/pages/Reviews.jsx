import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../services/API';
import { useParams } from 'react-router-dom';
import ReviewRender from 'components/ReviewRender';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId).then(res => {
      setReviews(res.data.results);
    });
  }, [movieId]);

  return <>{reviews && <ReviewRender reviews={reviews} />}</>;
}
