import s from './MoviePublic.module.css';

export default function MoviePublic({ item }) {
  return (
    <div className={s.container}>
      <div className={s.img_container}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
          alt={item.title}
        />
      </div>

      <div className={s.content_container}>
        <h2>{item.title}</h2>
        <p>User score: {item.vote_average * 10}%</p>
        <h3>Overview</h3>
        <p>{item.overview}</p>
        <h3>Genres</h3>
        <p>
          {item.genres.map(item => {
            return `${item.name}`;
          })}
        </p>
      </div>
    </div>
  );
}
