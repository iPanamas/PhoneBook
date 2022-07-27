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
      <h1 className={s.homePage__title}>
        <FaAddressBook className={s.homePage__icon} />
        Hello this is phoneBook App
      </h1>
      <p className={s.HomePage__text}>Here you can save your contacts</p>
    </motion.div>
  );
};

export default HomePage;
