import s from './Contact.module.css';
import { BsGithub } from 'react-icons/bs';
const ContactsFooter = () => {
  return (
    <div className={s.footer}>
      <a
        className={s.footerLink}
        href="https://github.com/iPanamas/goit-react-hw-07-phonebook"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
        goit-react-hw-07-phonebook
      </a>
    </div>
  );
};

export default ContactsFooter;
