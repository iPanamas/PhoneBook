// Auth selectors
import authSelectors from 'redux/auth/authSelectors';

// Redux hooks
import { useSelector } from 'react-redux';

// React router
import { Navigate } from 'react-router-dom';

// PropTypes
import PropTypes from 'prop-types';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const token = useSelector(authSelectors.getToken);

  return token ? children : <Navigate to={redirectTo} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string,
};

export default PrivateRoute;
