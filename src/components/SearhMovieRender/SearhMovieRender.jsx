import { useLocation, Link } from 'react-router-dom';
import s from './SearhMovieRender.module.css'

export default function SearhMovieRender({ movieList }) {
  const location = useLocation();

  return (
    <ul className={s.movie_list}>
      {movieList.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`} state={{ from: location }}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
