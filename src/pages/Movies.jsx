import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../services/API';
import SearhMovieRender from 'components/SearhMovieRender';

const input = {
  paddingLeft: 20,  
};

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [movieList, setMovieList] = useState(null);

  const query = searchParams.get('query');

  useEffect(() => {
    if (query !== null) {
      setSearchQuery(query);
      fetchSearchMovies(query).then(res => {
        setMovieList(res.data.results);
      });
    }
  }, [query]);

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return;
    }

    setSearchParams(`query=${searchQuery}`);

    fetchSearchMovies(searchQuery).then(res => {
      setMovieList(res.data.results);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off" style={input}>
        <input type="text" name="searchQuery" onChange={handleChange}></input>
        <button type="submit">Search</button>
      </form>
      <div>{movieList && <SearhMovieRender movieList={movieList} />}</div>
    </div>
  );
}
