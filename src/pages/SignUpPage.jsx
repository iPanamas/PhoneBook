import { motion } from 'framer-motion';
import animationPage from 'animation/animationPage';
// RTK Query hooks
import { useSignUpUserMutation } from 'services/phoneBook';

// Redux
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/authSlice';

// Hooks
import useShowPassword from 'Hooks/useShowPassword';

// Styles
import s from './Pages.module.css';

// Formik
import { useFormik } from 'formik';
import * as Yup from 'yup';

// React icons
import { FaUserCircle } from 'react-icons/fa';
import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';

// React router dom
import { NavLink } from 'react-router-dom';

// Toast notify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const SignUpPage = () => {
  const [type, handlePasswordToggle] = useShowPassword();
  const [signUpUser] = useSignUpUserMutation();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: async ({ name, email, password }, { resetForm }) => {
      try {
        const { data } = await signUpUser({ name, email, password });
        dispatch(signUp(data));
      } catch (error) {
        console.log(error);
        toast.error('Try to enter another name or email');
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
      variants={animationPage.pageVariants}
      transition={animationPage.pageTransition}
    >
      <FaUserCircle className={s.formWrapper__icon} />
      <h2 className={s.formWrapper__title}>Welcome</h2>
      <form className={s.form} onSubmit={formik.handleSubmit}>
        <p className={s.form__title}>Sign up in PhoneBook</p>
        <label className={s.form__label}>
          <input
            className={s.form__input}
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            type="text"
            placeholder="Name"
          />
        </label>
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
          Sign up
        </button>
        <p className={s.form__text}>
          Already register on PhoneBook?&nbsp;
          <NavLink className={s.form__link} to="/signIn">
            Sign in
          </NavLink>
        </p>
      </form>
    </motion.div>
  );
};

export default SignUpPage;
