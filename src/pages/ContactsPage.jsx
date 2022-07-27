import { motion } from 'framer-motion';
import animationPage from 'animation/animationPage';

// Components
import ContactForm from 'components/Contact/ContactForm';
import ContactList from 'components/Contact/ContactList';
import { PhoneBookTitle, ContactTitle } from 'components/Contact/ContactTitle';

// Styles
import s from 'components/Contact/Contact.module.css';

const ContactsPage = () => {
  return (
    <motion.div
      className={s.phoneBook}
      animate="in"
      initial="initial"
      exit="out"
      variants={animationPage.pageVariants}
      transition={animationPage.pageTransition}
    >
      <PhoneBookTitle />
      <ContactForm />
      <ContactTitle />
      <ContactList />
    </motion.div>
  );
};

export default ContactsPage;
