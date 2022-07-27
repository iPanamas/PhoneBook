// RTK Query hooks
import { useDeleteContactMutation } from 'services/phoneBook';

// Styles
import s from './Contact.module.css';

// Hook
import useVisibleItem from 'Hooks/useVisibleItem';

// PropTypes
import PropTypes from 'prop-types';

// Framer motion
import { motion, AnimatePresence } from 'framer-motion';
import { listItemVariants } from 'animation/animationPage';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();
  const [isVisible, handleVisible] = useVisibleItem();

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.li
            className={s.contactList__item}
            variants={listItemVariants}
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
