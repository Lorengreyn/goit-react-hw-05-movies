import { useEffect, useState } from 'react';
import {
  useParams,
  useLocation,
  useNavigate,
  NavLink,
  Outlet,
} from 'react-router-dom';
import { FetchMovieDetails } from 'Services/ApiSerices';
import css from './MovieDetailsPage.module.css'
import styled from 'styled-components';

const Button = styled.button`
  margin-top: 10px;
  margin-left: 10px;
  padding: 5px 10px;
  background: darkviolet;
  border-radius: 3px;
  border: none;
  color: white;
  cursor: pointer;
`;

export default function MovieDetailsPage({ data }) {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const prevPath = location.state.from;

  const onBack = () => {
    navigate(prevPath);
  };

  const [movie, setMovie] = useState();
  useEffect(() => {
    FetchMovieDetails(params.id).then(movie => setMovie(movie));
  }, [params.id]);
  return (
    <div>
      {movie && (
        <>
          <Button onClick={onBack} >Go Back</Button>
          <div className={css.MovieDetailsInfo}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300/` + movie.poster_path
                  : 'https://static.thenounproject.com/png/3674270-200.png'
              }
              alt={movie.title}
            />
            <div className={css.MovieInfoTextContainer}>
              <h2>{movie.original_title}</h2>
              <p>{`Rating ${movie.vote_average}`}</p>
              <h3 className={css.title}>Owerview:</h3>
              <p className={css.text}>{movie.overview}</p>

              <div >
                <strong className={css.title}>Ganres: </strong>
                {movie.genres.map(({ id, name }) => (
                  <p key={id}>{name}</p>
                ))}
              </div>
            </div>
          </div>

          <div className={css.list}>
            <h2 className={css.title}>Additional information</h2>
            <NavLink to="cast" state={{ from: prevPath }} className={css.NavLink}>
              Cast
            </NavLink>
            <NavLink
              to="reviews"
              state={{ from: prevPath }}
              className={css.NavLink}
            >
              Review
            </NavLink>
          </div>
          <Outlet />
        </>
      )}
    </div>
  );
}
