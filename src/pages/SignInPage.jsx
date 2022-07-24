import s from './Pages.module.css';
import { useState } from 'react';
import { useSignInUserMutation } from 'services/phoneBook';
import { useDispatch } from 'react-redux';
import { setCredentials } from 'redux/auth/authSlice';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const onChangeEmail = event => setEmail(event.target.value);
  const onChangePassword = event => setPassword(event.target.value);

  const [signInUser] = useSignInUserMutation();

  const handleSubmit = async event => {
    event.preventDefault();

    setEmail('');
    setPassword('');

    try {
      const { data } = await signInUser({ email, password });
      dispatch(setCredentials(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <p className={s.form__title}>Sign in to PhoneBook</p>
        <label className={s.form__label}>
          <input
            onChange={onChangeEmail}
            value={email}
            className={s.form__input}
            type="email"
            placeholder="Email"
          />
        </label>
        <label className={s.form__label}>
          <input
            onChange={onChangePassword}
            value={password}
            className={s.form__input}
            type="password"
            placeholder="Password"
          />
        </label>
        <button className={s.form__button} type="submit">
          Sign in
        </button>
        <p className={s.form__text}>
          New to PhoneBook?&nbsp;
          <NavLink className={s.form__link} to="/register">
            Create an account
          </NavLink>
        </p>
      </form>
    </>
  );
};

export default LoginPage;
