// Styles
import s from './Pages.module.css';

// Framer motion
import { motion } from 'framer-motion';
import { pageVariants } from 'animation/animationPage';
import { pageTransition } from 'animation/animationPage';

// React icons
import { FaAddressBook } from 'react-icons/fa';

const HomePage = () => {
  return (
    <motion.div
      className={s.homePage}
      animate="in"
      initial="initial"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
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
