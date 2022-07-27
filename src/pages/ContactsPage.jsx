// Components
import ContactForm from 'components/Contact/ContactForm';
import ContactList from 'components/Contact/ContactList';
import { PhoneBookTitle, ContactTitle } from 'components/Contact/ContactTitle';

// Styles
import s from 'components/Contact/Contact.module.css';

// Framer motion
import { motion } from 'framer-motion';
import { pageVariants } from 'animation/animationPage';
import { pageTransition } from 'animation/animationPage';

const ContactsPage = () => {
  return (
    <motion.div
      className={s.phoneBook}
      animate="in"
      initial="initial"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <PhoneBookTitle />
      <ContactForm />
      <ContactTitle />
      <ContactList />
    </motion.div>
  );
};

export default ContactsPage;
