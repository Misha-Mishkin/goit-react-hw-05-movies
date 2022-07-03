import { NavLink, Outlet } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? s.nav_item : s.active)}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? s.nav_item : s.active)}
      >
        Movies
      </NavLink>
      <hr />
      <Outlet />
    </nav>
  );
}
