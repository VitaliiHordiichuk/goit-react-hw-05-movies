import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from '../../Api/Api';
import { List } from './Home.styled';

export const Home = () => {
  const [trending, setTrending] = useState();

  useEffect(() => {
    fetchTrending().then(response => setTrending(response));
  }, []);

  return (
    <List>
      <h2>Trending today</h2>
      <ul>
        {trending &&
          trending.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </List>
  );
};
