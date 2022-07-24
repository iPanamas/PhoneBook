import s from './Pages.module.css';
import { useSignUpUserMutation } from 'services/phoneBook';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from 'redux/auth/authSlice';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onNameChange = event => setName(event.target.value);
  const onEmailChange = event => setEmail(event.target.value);
  const onPasswordChange = event => setPassword(event.target.value);

  const [signUpUser] = useSignUpUserMutation();

  const handleSubmit = async event => {
    event.preventDefault();

    setName('');
    setEmail('');
    setPassword('');

    try {
      const { data } = await signUpUser({ name, email, password });
      dispatch(setCredentials(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <p className={s.form__title}>Welcome</p>
        <label className={s.form__label}>
          <input
            onChange={onNameChange}
            value={name}
            className={s.form__input}
            type="text"
            placeholder="Name"
          />
        </label>
        <label className={s.form__label}>
          <input
            onChange={onEmailChange}
            className={s.form__input}
            value={email}
            type="email"
            placeholder="Email"
          />
        </label>
        <label className={s.form__label}>
          <input
            onChange={onPasswordChange}
            className={s.form__input}
            value={password}
            type="password"
            placeholder="Password"
          />
        </label>
        <button className={s.form__button} type="submit">
          Sign up
        </button>
      </form>
    </>
  );
};

export default SignUpPage;
