// RTK Query hooks
import { useSignInUserMutation } from 'services/phoneBook';

// Hooks
import useShowPassword from 'Hooks/useShowPassword';

// Styles
import s from './Pages.module.css';

// Framer motion
import { motion } from 'framer-motion';
import { pageVariants } from 'animation/animationPage';
import { pageTransition } from 'animation/animationPage';

// Redux
import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/authSlice';

// React router dom
import { NavLink } from 'react-router-dom';

// Formik
import { useFormik } from 'formik';
import * as Yup from 'yup';

// React icons
import { FaUserCircle } from 'react-icons/fa';
import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';

// Toast notify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const LoginPage = () => {
  const [type, handlePasswordToggle] = useShowPassword();
  const [signInUser] = useSignInUserMutation();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ email, password }, { resetForm }) => {
      try {
        const { data } = await signInUser({ email, password });
        dispatch(signIn(data));
      } catch (error) {
        console.log(error);
        toast.error('Wrong email or password!');
      }
      resetForm();
    },
    validationSchema: schema,
  });

  const { email, password } = formik.values;

  const handleClick = () => {
    if (email === '' || password === '') {
      return toast.info(`Form fields must be completed`);
    }
  };

  return (
    <motion.div
      className={s.formWrapper}
      animate="in"
      initial="initial"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <FaUserCircle className={s.formWrapper__icon} />
      <h2 className={s.formWrapper__title}>Welcome</h2>
      <form className={s.form} onSubmit={formik.handleSubmit}>
        <p className={s.form__title}>Sign in to PhoneBook</p>
        <label className={s.form__label}>
          <input
            className={s.form__input}
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            type="email"
            placeholder="Email"
          />
        </label>
        <label className={s.form__label}>
          <div className={s.inputWrapper}>
            <input
              className={s.form__input}
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              type={type}
              placeholder="Password"
            />
            <span className={s.input__icon} onClick={handlePasswordToggle}>
              {type === 'password' ? <BsEye /> : <BsEyeSlash />}
            </span>
          </div>
        </label>
        <button className={s.form__button} type="submit" onClick={handleClick}>
          Sign in
        </button>
        <p className={s.form__text}>
          New to PhoneBook?&nbsp;
          <NavLink className={s.form__link} to="/signUp">
            Create an account
          </NavLink>
        </p>
      </form>
    </motion.div>
  );
};

export default LoginPage;
