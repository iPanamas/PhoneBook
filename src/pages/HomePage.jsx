import { motion } from 'framer-motion';
import animationPage from 'animation/animationPage';
// Styles
import s from './Pages.module.css';

// React icons
import { FaAddressBook } from 'react-icons/fa';

const HomePage = () => {
  return (
    <motion.div
      className={s.homePage}
      animate="in"
      initial="initial"
      exit="out"
      variants={animationPage.pageVariants}
      transition={animationPage.pageTransition}
    >
      <FaAddressBook className={s.homePage__icon} />
      <h1 className={s.homePage__title}>Hello this is phoneBook App</h1>
    </motion.div>
  );
};

export default HomePage;
