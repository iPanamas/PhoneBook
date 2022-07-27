// Styles
import s from './Footer.module.css';
// React icons
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className={s.footer}>
      <a
        className={s.footerLink}
        href="https://github.com/iPanamas/goit-react-hw-08-phonebook"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
        goit-react-hw-08-phonebook
      </a>
    </div>
  );
};

export default Footer;
