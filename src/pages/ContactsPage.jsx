// Components
import ContactForm from 'components/Contact/ContactForm';
import ContactList from 'components/Contact/ContactList';
import { PhoneBookTitle, ContactTitle } from 'components/Contact/ContactTitle';

// Styles
import s from 'components/Contact/Contact.module.css';

const ContactsPage = () => {
  return (
    <>
      <div className={s.phoneBook}>
        <PhoneBookTitle />
        <ContactForm />
        <ContactTitle />
        <ContactList />
      </div>
    </>
  );
};

export default ContactsPage;
