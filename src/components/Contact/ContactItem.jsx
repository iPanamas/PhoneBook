// PropTypes
import PropTypes from 'prop-types';

// Hook
import useVisibleItem from 'Hooks/useVisibleItem';

// RTK Query hooks
import { useDeleteContactMutation } from 'redux/contacts/contactSlice';

// Framer motion
import { motion, AnimatePresence } from 'framer-motion';

// Animation settings
import animamteSettings from 'animation/animationSettings';

// Styles
import s from './Contact.module.css';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();
  const [isVisible, handleVisible] = useVisibleItem();

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.li
            className={s.contactList__item}
            variants={animamteSettings}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={handleVisible}
          >
            <p className={s.contactList__text}>
              <b>{name}</b>: {number}
            </p>
            <button
              className={s.contactList__button}
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </motion.li>
        )}
      </AnimatePresence>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
