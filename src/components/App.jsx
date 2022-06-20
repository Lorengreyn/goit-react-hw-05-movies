import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'react-spinners/MoonLoader';
import MoviesList from './MovieList/MoviesList';


const HomePage = lazy(() =>
  import('../Pages/HomePage/HomePage')
);
const MoviesPage = lazy(() =>
  import('../Pages/MoviesPage')
);
const MovieDetailsPage = lazy(() =>
  import(
    '../Pages/MovieDetailsPage/MovieDetailsPage')
);
const Navigation = lazy(() =>
  import('./Navigation/Navigation')
);
const MovieCast = lazy(() =>
  import('./Cast/MovieCast')
);
const MovieReviews = lazy(() =>
  import('./Reviews/Reviews')
);

export const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<MoviesList />} />
          </Route>
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id/*" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<HomePage />}/>
        </Routes>
      </Suspense>
    </>
  );
};
