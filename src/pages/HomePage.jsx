// Styles
import s from './Pages.module.css';

// React icons
import { FaAddressBook } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className={s.homePage}>
      <FaAddressBook className={s.homePage__icon} />
      <h1 className={s.homePage__title}>Hello this is phoneBook App</h1>
    </div>
  );
};

export default HomePage;
