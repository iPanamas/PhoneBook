// Hooks
import { useMemo } from 'react';
import useContacts from 'Hooks/useContacts';

// Loader
import Loader from 'components/Loader/Loader';

// Styles
import s from './Contact.module.css';

// Components
import ContactFilter from './ContactFilter';
import ContactItem from './ContactItem';

const ContactList = () => {
  const { filteredContacts, isLoading, isSuccess } = useContacts();

  const contactsSum = filteredContacts?.length;

  const sortContactsById = useMemo(() => {
    return [...filteredContacts].sort((a, b) => b.id - a.id);
  }, [filteredContacts]);

  return (
    <>
      <ContactFilter />
      {!contactsSum ? (
        <p className={s.contactList__text}>Phonebook is empty.</p>
      ) : (
        <p className={s.contactList__text}>Contacts: {contactsSum}</p>
      )}
      {isLoading && <Loader />}
      {isSuccess && (
        <ul className={s.contactList}>
          {sortContactsById.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
