// Components
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';

// Styles
import s from './Navigation.module.css';

// Auth selectors
import authSelectors from 'redux/auth/authSelectors';

// React-router
import { NavLink } from 'react-router-dom';

// Hooks
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.navList__item}>
          <NavLink className={s.navList__link} to="/">
            Main
          </NavLink>
        </li>
        {isLoggedIn && (
          <li className={s.navList__item}>
            <NavLink className={s.navList__link} to="/contacts">
              Contacts
            </NavLink>
          </li>
        )}
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </ul>
    </nav>
  );
};
export default Navigation;
