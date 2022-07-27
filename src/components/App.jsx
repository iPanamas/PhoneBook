// RTK Query API
import { useAuthRefreshQuery } from 'services/phoneBook';
// Lazy-load
import { lazy, Suspense, useEffect } from 'react';
// Redux hooks
import { useSelector, useDispatch } from 'react-redux';
// React-router
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
// Auth slice
import { refreshToken } from 'redux/auth/authSlice';
// Auth selectors
import authSelectors from 'redux/auth/authSelectors';
// Components
import AppBar from './AppBar/AppBar';
import Container from './Container/Container';
import Footer from './Footer/Footer';
// Loader
import { LoaderBar } from './Loader/Loader';
// Pages
const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const SignInPage = lazy(() => import('pages/SignInPage'));
const SignUpPage = lazy(() => import('pages/SignUpPage'));

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getToken);
  const { data, isLoading } = useAuthRefreshQuery(token, {
    skip: token === null,
  });

  useEffect(() => {
    if (data) {
      dispatch(refreshToken(data));
    }
  }, [data, dispatch]);

  return (
    !isLoading && (
      <Container>
        <AppBar />
        <div className="content-wrap">
          <Suspense fallback={<LoaderBar />}>
            <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />

              <Route
                path="/contacts"
                element={
                  <PrivateRoute>
                    <ContactsPage />
                  </PrivateRoute>
                }
              />

              <Route
                path="/signUp"
                element={
                  <PublicRoute restricted>
                    <SignUpPage />
                  </PublicRoute>
                }
              />

              <Route
                path="/signIn"
                element={
                  <PublicRoute restricted>
                    <SignInPage />
                  </PublicRoute>
                }
              />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </Container>
    )
  );
};

export default App;
