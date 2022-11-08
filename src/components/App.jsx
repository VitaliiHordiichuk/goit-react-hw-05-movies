import { Route, Routes, Navigate } from 'react-router-dom';
import { Navigation } from '../components/Navigation/Navigation';
import { Home } from './views/Home/Home';
import { lazy, Suspense } from 'react';

const MovieView = lazy(() => import('./views/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('./views/Movies/Movies'));
const Reviews = lazy(() => import('./views/Reviews/Reviews'));
const Cast = lazy(() => import('./views/Cast/Cast'));

export const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieView />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="error" element={<h1>404</h1>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};
