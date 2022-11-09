import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovie } from '../../Api/Api';
import {
  Button,
  Information,
  Header,
  Ul,
  Genres,
  Additionally,
  AdditionallyLi,
} from './MovieDetails.slyled';

const MovieView = () => {
  const [movie, setMovie] = useState([]);

  const { movieId } = useParams();

  const location = useLocation();

  useEffect(() => {
    fetchMovie(movieId).then(setMovie);
  }, [movieId]);

  const { original_title, poster_path, overview, genres, vote_average } = movie;
  const back = location.state?.from ?? '/';
  return (
    <div>
      <Information>
        <div>
          <Button to={back}>&#9664; &nbsp;&nbsp;go back</Button>

          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w200${poster_path}`
                : 'https://dummyimage.com/200x300/b3b3b3/fff.jpg&text=No+image'
            }
            alt={original_title}
          />
        </div>
        <div>
          <Header>{original_title}</Header>
          <p>
            User Score: <span>{Math.round(10 * vote_average)}</span>%
          </p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <Genres>
            {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </Genres>
        </div>
      </Information>
      <Additionally>
        <p>Additional information</p>
        <Ul>
          <li>
            <AdditionallyLi
              to={`cast`}
              state={{ from: location.state?.from ?? '/' }}
            >
              Cast
            </AdditionallyLi>
          </li>
          <li>
            <AdditionallyLi
              to={'reviews'}
              state={{ from: location.state?.from ?? '/' }}
            >
              Reviews
            </AdditionallyLi>
          </li>
        </Ul>
      </Additionally>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieView;
