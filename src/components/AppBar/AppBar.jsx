import Navigation from 'components/Navigation/Navigation';

// Styles
import s from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
};

export default AppBar;
