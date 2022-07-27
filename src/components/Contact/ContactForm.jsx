// RTK Query hooks
import {
  useFetchContactsQuery,
  useAddContactMutation,
} from 'services/phoneBook';

// Loader
import { Loader } from 'components/Loader/Loader';

// Styles
import s from './Contact.module.css';

// Formik
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Hooks
import { useMemo } from 'react';

// Toast notify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .required('This field is Required')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Phone number is not valid'
    ),
});

const ContactForm = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    onSubmit: async ({ name, number }, { resetForm }) => {
      resetForm();
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
    },
    validationSchema: schema,
  });

  const { name } = formik.values;

  const alreadyInContacts = useMemo(() => {
    return contacts?.find(contact => contact.name === name);
  }, [contacts, name]);

  return (
    <form className={s.phoneBookForm} onSubmit={formik.handleSubmit}>
      <label className={s.phoneBookLabel}>
        <input
          className={s.phoneBookInput}
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
        />
      </label>
      <label className={s.phoneBookLabel}>
        <input
          className={s.phoneBookInput}
          name="number"
          onChange={formik.handleChange}
          value={formik.values.number}
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Number"
        />
      </label>
      <button className={s.phoneBookButton} type="submit">
        {isLoading ? <Loader /> : 'Add contact'}
      </button>
    </form>
  );
};
export default ContactForm;
