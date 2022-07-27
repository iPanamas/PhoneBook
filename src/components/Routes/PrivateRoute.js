// Redux hooks
import { useSelector } from 'react-redux';
// React router
import { Navigate } from 'react-router-dom';
// Auth selectors
import authSelectors from 'redux/auth/authSelectors';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const token = useSelector(authSelectors.getToken);

  return token ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
