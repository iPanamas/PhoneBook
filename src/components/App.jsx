// Lazy-load
import { lazy, Suspense } from 'react';

// import { useSelector, useDispatch } from 'react-redux';
import { setCredentials } from 'redux/auth/authSlice';
// React-router
import { Route, Routes } from 'react-router-dom';

// Components
import AppBar from './AppBar/AppBar';
import Container from './Container/Container';
import Footer from './Footer/Footer';

// import { useFetchCurrentUserQuery } from 'services/phoneBook';

// Pages
const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const SignInPage = lazy(() => import('pages/SignInPage'));
const SignUpPage = lazy(() => import('pages/SignUpPage'));

const App = () => {
  // const token = useSelector(state => state.auth.token);
  // const currentUser = useFetchCurrentUserQuery();
  // const dispatch = useDispatch();

  // if (token) {
  //   const { data } = currentUser;
  //   console.log(data);
  // } else {
  //   console.log('dotvidaniya');
  // }

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/login" element={<SignInPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </Container>
  );
};

export default App;
