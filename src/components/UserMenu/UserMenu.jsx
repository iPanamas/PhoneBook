// RTK Query hooks
import { useSignOutUserMutation } from 'services/phoneBook';
// Auth slice
import { signOut } from 'redux/auth/authSlice';
// styles
import s from './UserMenu.module.css';
// React icons
import { FiUser } from 'react-icons/fi';
import { GoSignOut } from 'react-icons/go';
// Redux hooks
import { useSelector, useDispatch } from 'react-redux';
// Auth selector
import authSelectors from 'redux/auth/authSelectors';

const UserMenu = () => {
  const email = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();
  const [signOutUser] = useSignOutUserMutation();

  const handleSignOut = async () => {
    try {
      signOutUser();
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={s.userMenu}>
      <FiUser className={s.userMenu__icon} />
      <p className={s.userMenu__text}>{email}</p>

      <button
        type="button"
        className={s.userMenu__button}
        onClick={handleSignOut}
      >
        <GoSignOut className={s.userMenu__icon} />
      </button>
    </div>
  );
};

export default UserMenu;
