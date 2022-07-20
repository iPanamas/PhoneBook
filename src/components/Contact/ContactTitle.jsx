// React icons
import { BsPhone } from 'react-icons/bs';
import { RiContactsLine } from 'react-icons/ri';

// Styles
import s from './Contact.module.css';

export const PhonebookTitle = () => {
  return (
    <h1 className={s.phonebookTitle}>
      Phonebook
      <BsPhone />
    </h1>
  );
};

export const ContactTitle = () => {
  return (
    <h2 className={s.contactsTitle}>
      Contacts <RiContactsLine />
    </h2>
  );
};
