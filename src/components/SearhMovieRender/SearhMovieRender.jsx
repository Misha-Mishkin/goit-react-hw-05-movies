import { useLocation, Link } from 'react-router-dom';

export default function SearhMovieRender({ movieList }) {
  const location = useLocation();

  return (
    <ul>
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
