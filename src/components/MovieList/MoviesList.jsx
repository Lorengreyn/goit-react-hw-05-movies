import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export default function MoviesList({ data }) {
  const location = useLocation();

  return (
    <div className={css.container}>
      {data && (
        <ul className={css.list}>
          {data.map(movie => (
            <li key={movie.id} className={css.item}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }} className={css.link}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

MoviesList.propTypes = {
  data: PropTypes.array,
};
