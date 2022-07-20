// Hooks
import { useState, useMemo } from 'react';

// RTK Query hooks
import {
  useFetchContactsQuery,
  useAddContactMutation,
} from 'redux/contacts/contactSlice';

// Toast notify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Loader
import Loader from 'components/Loader/Loader';

// Styles
import s from './Contact.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onNameChange = event => setName(event.target.value);
  const onNumberChange = event => setNumber(event.target.value);

  const { data: contacts } = useFetchContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const alreadyInContacts = useMemo(() => {
    return contacts?.find(contact => contact.name === name);
  }, [name, contacts]);

  const handleSubmit = async event => {
    event.preventDefault();

    setName('');
    setNumber('');

    try {
      if (alreadyInContacts) {
        return toast.warn(`${name} is already in 📱`);
      } else {
        await addContact({ name, number });
        return toast.success(`${name} added in your 📱`);
      }
    } catch (error) {
      console.log(error);
      return toast.error('Ooops..., something went wrong, try again later');
    }
  };

  return (
    <form className={s.phonebookForm} onSubmit={handleSubmit}>
      <label className={s.phonebookLabel}>
        <input
          className={s.phonebookInput}
          value={name}
          onChange={onNameChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
        />
      </label>
      <label className={s.phonebookLabel}>
        <input
          className={s.phonebookInput}
          value={number}
          onChange={onNumberChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Number"
        />
      </label>
      <button className={s.phonebookButton} type="submit">
        {isLoading ? <Loader /> : 'Add contact'}
      </button>
    </form>
  );
};
export default ContactForm;
