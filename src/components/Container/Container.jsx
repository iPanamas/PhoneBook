// PropTypes
import PropTypes from 'prop-types';
// Styles
import s from './Container.module.css';

const Container = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
