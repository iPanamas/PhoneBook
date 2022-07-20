// Components
import ContactForm from './Contact/ContactForm';
import ContactList from './Contact/ContactList';
import ContactsFooter from './Contact/ContactFooter';
import { PhonebookTitle, ContactTitle } from './Contact/ContactTitle';
// Styles
import s from './Contact/Contact.module.css';

const App = () => {
  return (
    <div className={s.phoneboook}>
      <PhonebookTitle />
      <ContactForm />
      <ContactTitle />
      <ContactList />
      <ContactsFooter />
    </div>
  );
};

export default App;
