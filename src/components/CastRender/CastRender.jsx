import s from './CastRender.module.css';

export default function CastRender({ cast }) {
  return (
    <ul className={s.cast_items}>
      {cast.map(item => (
        <li key={item.id} className={s.cast_item}>
          <img
            alt={item.original_name}
            src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
            width="100px"
          ></img>
          <h3>{item.name}</h3>
          <p>{item.character}</p>
        </li>
      ))}
    </ul>
  );
}
