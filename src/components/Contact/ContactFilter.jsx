// Contact selectors
import contactSelectors from 'redux/contacts/contactSelectors';

// Styles
import s from './Contact.module.css';

// Contact slice
import { changeFilter } from 'redux/contacts/contactSlice';

// Redux hooks
import { useSelector, useDispatch } from 'react-redux';

const ContactFilter = () => {
  const filter = useSelector(contactSelectors.getFilter);
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
