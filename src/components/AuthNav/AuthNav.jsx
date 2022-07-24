import { NavLink } from 'react-router-dom';
import s from '../Navigation/Navigation.module.css';

const AuthNav = () => {
  return (
    <>
      <li className={s.navList__item}>
        <NavLink className={s.navList__link} to="/login">
          Sign in
        </NavLink>
      </li>
      <li className={s.navList__item}>
        <NavLink className={s.navList__link} to="/register">
          Sign up
        </NavLink>
      </li>
    </>
  );
};
export default AuthNav;
