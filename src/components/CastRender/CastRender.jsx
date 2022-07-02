export default function CastRender({ cast }) {
  return (
    <ul>
      {cast.map(item => (
        <li key={item.id}>
          <img
            alt={item.original_name}
            src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
            width="100px"
          ></img>
          <p>{item.name}</p>
          <p>{item.character}</p>
        </li>
      ))}
    </ul>
  );
}
