import { useState, useEffect } from 'react';
import { fetchMovieCredits } from '../services/API';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieCredits(movieId).then(res => {
      setCast(res.data.cast);
    });
  }, [movieId]);

  return (
    <>
      {cast &&
        cast.map(item => {
          return (
            <li key={item.id}>
              <img
                alt={item.original_name}
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                width="100px"
              ></img>
              <p>{item.name}</p>
              <p>{item.character}</p>
            </li>
          );
        })}
    </>
  );
}
