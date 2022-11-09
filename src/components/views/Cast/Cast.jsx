import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieCast } from '../../Api/Api';

const Cast = () => {
  const [casts, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    FetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul>
      {casts.map(({ id, name, profile_path, character }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200${profile_path}`
                : 'https://dummyimage.com/200x300/b3b3b3/fff.jpg&text=No+image'
            }
            alt={name}
          />
          <p>{name}</p>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
};
export default Cast;
