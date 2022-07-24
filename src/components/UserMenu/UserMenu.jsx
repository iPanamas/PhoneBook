import { useSelector, useDispatch } from 'react-redux';
import { FiUser } from 'react-icons/fi';
import { GoSignOut } from 'react-icons/go';

import { useSignOutUserMutation } from 'services/phoneBook';
import { unSetCredentials } from 'redux/auth/authSlice';

// styles
import s from './UserMenu.module.css';

const UserMenu = () => {
  const email = useSelector(state => state.auth.user.email);

  const dispatch = useDispatch();
  const [signOutUser] = useSignOutUserMutation();

  const handleSignOut = async () => {
    try {
      signOutUser();
      dispatch(unSetCredentials());
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
