// Redux hooks
import { useSelector } from 'react-redux';
// React router
import { Navigate } from 'react-router-dom';
// Auth selectors
import authSelectors from 'redux/auth/authSelectors';

const PublicRoute = ({
  children,
  restricted = false,
  redirectTo = '/contacts',
}) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

export default PublicRoute;
