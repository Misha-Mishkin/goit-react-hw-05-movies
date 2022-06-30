import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={s.nav}>
      <NavLink to="/" className={s.nav_item}>
        Home
      </NavLink>
      <NavLink to="/movies" className={s.nav_item}>
        Movies
      </NavLink>
    </nav>
  );
}
