import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
    text-decoration: underline;
  }
`;

export default function Navigation() {
  return (
    <>
      <StyledLink to="/" className={css.link} style={{ margin: '15px' }}>
        Home
      </StyledLink>
      <StyledLink to="/movies" className={css.link}>
        Movies
      </StyledLink>
    </>
  );
}
