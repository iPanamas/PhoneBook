import { changeFilter } from 'redux/contacts/contactSlice';

import { useSelector, useDispatch } from 'react-redux';

// Styles
import s from './Contact.module.css';

const ContactFilter = () => {
  const filter = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

  return (
    <label className={s.findContactLabel}>
      Find contacts by name
      <input
        className={s.findContactInput}
        type="text"
        value={filter}
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </label>
  );
};

export default ContactFilter;
