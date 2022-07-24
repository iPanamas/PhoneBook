// React-router
import { NavLink } from 'react-router-dom';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
// Styles
import s from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.navList__item}>
          <NavLink className={s.navList__link} to="/">
            Main
          </NavLink>
        </li>
        <li className={s.navList__item}>
          <NavLink className={s.navList__link} to="/contacts">
            Contacts
          </NavLink>
        </li>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        {/* <UserMenu /> */}
      </ul>
    </nav>
  );
};
export default Navigation;
