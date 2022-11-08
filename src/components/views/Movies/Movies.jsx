import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { fetchMovieByQuery } from '../../Api/Api';
import { List, Input, Button } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('query');
  const [query, setQuery] = useState(name ? name : '');
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }
    fetchMovieByQuery(query).then(response => setMovies(response));
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    reset();
  };
  const reset = () => {
    setQuery('');
  };

  const handleChange = e => {
    const { value } = e.target;
    setQuery(value);
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <List>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Let`s find some movie"
          autoComplete="off"
          autoFocus
          value={query}
          onChange={handleChange}
        />
        <Button type="submit">Search</Button>
      </form>
      <ul>
        {movies !== '' &&
          movies.map(({ id, original_title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {original_title}
              </Link>
            </li>
          ))}
      </ul>
    </List>
  );
};

export default Movies;
