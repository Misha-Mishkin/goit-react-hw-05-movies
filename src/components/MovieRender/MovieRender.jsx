import PropTypes from 'prop-types';
import s from './MovieRender.module.css';

export default function MoviePublic({ movie }) {
  return (
    <div className={s.container}>
      <div className={s.img_container}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      <div className={s.content_container}>
        <h2>{movie.title}</h2>
        <p>User score: {movie.vote_average * 10}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        {movie.genres.map(movie => {
          return `${movie.name} `;
        })}
      </div>
    </div>
  );
}

MoviePublic.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};
