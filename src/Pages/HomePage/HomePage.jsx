import { useEffect, useState } from 'react';
import { FetchTrendingMovies } from '../../Services/ApiSerices';
import MoviesList from 'components/MovieList/MoviesList';
import css from './HomePage.module.css'

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    FetchTrendingMovies().then(data => setMovies(data));
  }, []);

  return (
    <>
      <h1 className={css.list}>Trending Today</h1>
      <MoviesList data={movies} />
    </>
  );
}
